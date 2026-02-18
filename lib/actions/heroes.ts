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

export async function createHero(
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const id = toId(name);
  const title = (formData.get("title") as string) || "";
  const father = (formData.get("father") as string) || undefined;
  const mother = (formData.get("mother") as string) || undefined;
  const divine = formData.get("divine") === "on";
  const famousFor = parseArray(formData.get("famousFor"));
  const weapons = parseArray(formData.get("weapons"));
  const companions = parseArray(formData.get("companions"));
  const fate = (formData.get("fate") as string) || "";
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  const parentage = JSON.stringify({
    ...(father ? { father } : {}),
    ...(mother ? { mother } : {}),
    divine,
  });

  try {
    await sql`
      INSERT INTO heroes (id, name, title, parentage, famous_for, weapons, companions, fate, description, image_url)
      VALUES (${id}, ${name}, ${title}, ${parentage}::jsonb, ${famousFor}, ${weapons}, ${companions}, ${fate}, ${description}, ${imageUrl})
    `;
  } catch {
    return { error: "Failed to create hero. The name may already exist, or the database is not connected." };
  }

  revalidatePath("/dashboard/heroes");
  redirect("/dashboard/heroes");
}

export async function updateHero(
  id: string,
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const title = (formData.get("title") as string) || "";
  const father = (formData.get("father") as string) || undefined;
  const mother = (formData.get("mother") as string) || undefined;
  const divine = formData.get("divine") === "on";
  const famousFor = parseArray(formData.get("famousFor"));
  const weapons = parseArray(formData.get("weapons"));
  const companions = parseArray(formData.get("companions"));
  const fate = (formData.get("fate") as string) || "";
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  const parentage = JSON.stringify({
    ...(father ? { father } : {}),
    ...(mother ? { mother } : {}),
    divine,
  });

  try {
    await sql`
      UPDATE heroes SET
        name = ${name}, title = ${title}, parentage = ${parentage}::jsonb,
        famous_for = ${famousFor}, weapons = ${weapons}, companions = ${companions},
        fate = ${fate}, description = ${description}, image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch {
    return { error: "Failed to update hero. The database may not be connected." };
  }

  revalidatePath("/dashboard/heroes");
  revalidatePath(`/dashboard/heroes/${id}`);
  redirect("/dashboard/heroes");
}

export async function deleteHero(id: string) {
  await requireAuth();

  try {
    await sql`DELETE FROM heroes WHERE id = ${id}`;
  } catch {
    // silently fail
  }

  revalidatePath("/dashboard/heroes");
  redirect("/dashboard/heroes");
}
