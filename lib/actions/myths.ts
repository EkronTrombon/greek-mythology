"use server";

import { sql } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function requireAuth() {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
}

function toId(title: string) {
  return title
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

const validCategories = ["creation", "heroic", "divine", "tragedy", "war", "love"] as const;

export async function createMyth(
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const title = formData.get("title") as string;
  if (!title?.trim()) return { error: "Title is required." };

  const rawCategory = formData.get("category") as string;
  if (!validCategories.includes(rawCategory as typeof validCategories[number])) {
    return { error: "Invalid category." };
  }

  const id = toId(title);
  const category = rawCategory as typeof validCategories[number];
  const characters = parseArray(formData.get("characters"));
  const locations = parseArray(formData.get("locations"));
  const summary = (formData.get("summary") as string) || "";
  const moralLesson = (formData.get("moralLesson") as string) || null;
  const description = (formData.get("description") as string) || "";

  try {
    await sql`
      INSERT INTO myths (id, title, category, characters, locations, summary, moral_lesson, description)
      VALUES (${id}, ${title}, ${category}, ${characters}, ${locations}, ${summary}, ${moralLesson}, ${description})
    `;
  } catch {
    return { error: "Failed to create myth. The title may already exist, or the database is not connected." };
  }

  revalidatePath("/dashboard/myths");
  redirect("/dashboard/myths");
}

export async function updateMyth(
  id: string,
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const title = formData.get("title") as string;
  if (!title?.trim()) return { error: "Title is required." };

  const rawCategory = formData.get("category") as string;
  if (!validCategories.includes(rawCategory as typeof validCategories[number])) {
    return { error: "Invalid category." };
  }

  const category = rawCategory as typeof validCategories[number];
  const characters = parseArray(formData.get("characters"));
  const locations = parseArray(formData.get("locations"));
  const summary = (formData.get("summary") as string) || "";
  const moralLesson = (formData.get("moralLesson") as string) || null;
  const description = (formData.get("description") as string) || "";

  try {
    await sql`
      UPDATE myths SET
        title = ${title}, category = ${category}, characters = ${characters},
        locations = ${locations}, summary = ${summary},
        moral_lesson = ${moralLesson}, description = ${description}
      WHERE id = ${id}
    `;
  } catch {
    return { error: "Failed to update myth. The database may not be connected." };
  }

  revalidatePath("/dashboard/myths");
  revalidatePath(`/dashboard/myths/${id}`);
  redirect("/dashboard/myths");
}

export async function deleteMyth(id: string) {
  await requireAuth();

  try {
    await sql`DELETE FROM myths WHERE id = ${id}`;
  } catch {
    // silently fail
  }

  revalidatePath("/dashboard/myths");
  redirect("/dashboard/myths");
}
