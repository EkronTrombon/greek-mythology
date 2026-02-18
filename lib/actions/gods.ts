"use server";

import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

function toId(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function parseArray(value: FormDataEntryValue | null): string[] {
  if (!value || typeof value !== "string") return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function createGod(
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const id = toId(name);
  const greekName = (formData.get("greekName") as string) || name;
  const romanName = (formData.get("romanName") as string) || name;
  const title = (formData.get("title") as string) || "";
  const domain = parseArray(formData.get("domain"));
  const symbols = parseArray(formData.get("symbols"));
  const father = (formData.get("father") as string) || undefined;
  const mother = (formData.get("mother") as string) || undefined;
  const residence = (formData.get("residence") as string) || "";
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  const parentage = JSON.stringify({
    ...(father ? { father } : {}),
    ...(mother ? { mother } : {}),
  });

  try {
    await sql`
      INSERT INTO gods (id, name, greek_name, roman_name, title, domain, symbols, parentage, residence, description, image_url)
      VALUES (${id}, ${name}, ${greekName}, ${romanName}, ${title}, ${domain}, ${symbols}, ${parentage}::jsonb, ${residence}, ${description}, ${imageUrl})
    `;
  } catch {
    return { error: "Failed to create god. The name may already exist, or the database is not connected." };
  }

  revalidatePath("/dashboard/gods");
  redirect("/dashboard/gods");
}

export async function updateGod(
  id: string,
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const greekName = (formData.get("greekName") as string) || name;
  const romanName = (formData.get("romanName") as string) || name;
  const title = (formData.get("title") as string) || "";
  const domain = parseArray(formData.get("domain"));
  const symbols = parseArray(formData.get("symbols"));
  const father = (formData.get("father") as string) || undefined;
  const mother = (formData.get("mother") as string) || undefined;
  const residence = (formData.get("residence") as string) || "";
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  const parentage = JSON.stringify({
    ...(father ? { father } : {}),
    ...(mother ? { mother } : {}),
  });

  try {
    await sql`
      UPDATE gods SET
        name = ${name}, greek_name = ${greekName}, roman_name = ${romanName},
        title = ${title}, domain = ${domain}, symbols = ${symbols},
        parentage = ${parentage}::jsonb, residence = ${residence},
        description = ${description}, image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch {
    return { error: "Failed to update god. The database may not be connected." };
  }

  revalidatePath("/dashboard/gods");
  revalidatePath(`/dashboard/gods/${id}`);
  redirect("/dashboard/gods");
}

export async function deleteGod(id: string) {
  await requireAuth();

  try {
    await sql`DELETE FROM gods WHERE id = ${id}`;
  } catch {
    // If DB not connected, silently fail — redirect still happens
  }

  revalidatePath("/dashboard/gods");
  redirect("/dashboard/gods");
}
