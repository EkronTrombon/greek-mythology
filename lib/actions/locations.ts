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

const validTypes = ["mountain", "underworld", "city", "island", "temple", "realm"] as const;

export async function createLocation(
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const rawType = formData.get("type") as string;
  if (!validTypes.includes(rawType as typeof validTypes[number])) {
    return { error: "Invalid location type." };
  }

  const id = toId(name);
  const type = rawType as typeof validTypes[number];
  const region = (formData.get("region") as string) || null;
  const significance = (formData.get("significance") as string) || "";
  const associatedDeities = parseArray(formData.get("associatedDeities"));
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  try {
    await sql`
      INSERT INTO locations (id, name, type, region, significance, associated_deities, description, image_url)
      VALUES (${id}, ${name}, ${type}, ${region}, ${significance}, ${associatedDeities}, ${description}, ${imageUrl})
    `;
  } catch {
    return { error: "Failed to create location. The name may already exist, or the database is not connected." };
  }

  revalidatePath("/dashboard/locations");
  redirect("/dashboard/locations");
}

export async function updateLocation(
  id: string,
  prevState: { error: string },
  formData: FormData
) {
  await requireAuth();

  const name = formData.get("name") as string;
  if (!name?.trim()) return { error: "Name is required." };

  const rawType = formData.get("type") as string;
  if (!validTypes.includes(rawType as typeof validTypes[number])) {
    return { error: "Invalid location type." };
  }

  const type = rawType as typeof validTypes[number];
  const region = (formData.get("region") as string) || null;
  const significance = (formData.get("significance") as string) || "";
  const associatedDeities = parseArray(formData.get("associatedDeities"));
  const description = (formData.get("description") as string) || "";
  const imageUrl = (formData.get("imageUrl") as string) || null;

  try {
    await sql`
      UPDATE locations SET
        name = ${name}, type = ${type}, region = ${region},
        significance = ${significance}, associated_deities = ${associatedDeities},
        description = ${description}, image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch {
    return { error: "Failed to update location. The database may not be connected." };
  }

  revalidatePath("/dashboard/locations");
  revalidatePath(`/dashboard/locations/${id}`);
  redirect("/dashboard/locations");
}

export async function deleteLocation(id: string) {
  await requireAuth();

  try {
    await sql`DELETE FROM locations WHERE id = ${id}`;
  } catch {
    // silently fail
  }

  revalidatePath("/dashboard/locations");
  redirect("/dashboard/locations");
}
