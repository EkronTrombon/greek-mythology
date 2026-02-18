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

export async function createCreature(
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const id = toId(name);
  const type = (formData.get("type") as string) || "";
  const description = (formData.get("description") as string) || "";
  const abilities = parseArray(formData.get("abilities"));
  const weakness = (formData.get("weakness") as string) || null;
  const famousEncounters = parseArray(formData.get("famousEncounters"));
  const imageUrl = (formData.get("imageUrl") as string) || null;

  try {
    await sql`
      INSERT INTO creatures (id, name, type, description, abilities, weakness, famous_encounters, image_url)
      VALUES (${id}, ${name}, ${type}, ${description}, ${abilities}, ${weakness}, ${famousEncounters}, ${imageUrl})
    `;
  } catch {
    return { error: "Failed to create creature. The name may already exist, or the database is not connected." };
  }

  revalidatePath("/dashboard/creatures");
  redirect("/dashboard/creatures");
}

export async function updateCreature(
  id: string,
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const type = (formData.get("type") as string) || "";
  const description = (formData.get("description") as string) || "";
  const abilities = parseArray(formData.get("abilities"));
  const weakness = (formData.get("weakness") as string) || null;
  const famousEncounters = parseArray(formData.get("famousEncounters"));
  const imageUrl = (formData.get("imageUrl") as string) || null;

  try {
    await sql`
      UPDATE creatures SET
        name = ${name}, type = ${type}, description = ${description},
        abilities = ${abilities}, weakness = ${weakness},
        famous_encounters = ${famousEncounters}, image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch {
    return { error: "Failed to update creature. The database may not be connected." };
  }

  revalidatePath("/dashboard/creatures");
  revalidatePath(`/dashboard/creatures/${id}`);
  redirect("/dashboard/creatures");
}

export async function deleteCreature(id: string) {
  await requireAuth();

  try {
    await sql`DELETE FROM creatures WHERE id = ${id}`;
  } catch {
    // silently fail
  }

  revalidatePath("/dashboard/creatures");
  redirect("/dashboard/creatures");
}
