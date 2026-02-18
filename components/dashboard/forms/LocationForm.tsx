"use client";

import { useActionState } from "react";
import { createLocation, updateLocation } from "@/lib/actions/locations";
import type { Location } from "@/lib/types";
import FormField from "./FormField";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import SelectField from "./SelectField";
import Link from "next/link";

interface LocationFormProps {
  location?: Location;
}

const initialState = { error: "" };

const typeOptions = [
  { value: "mountain", label: "Mountain" },
  { value: "underworld", label: "Underworld" },
  { value: "city", label: "City" },
  { value: "island", label: "Island" },
  { value: "temple", label: "Temple" },
  { value: "realm", label: "Realm" },
];

export default function LocationForm({ location }: LocationFormProps) {
  const action = location ? updateLocation.bind(null, location.id) : createLocation;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          defaultValue={location?.name}
          required
          placeholder="e.g. Mount Olympus"
        />
        <SelectField
          label="Type"
          name="type"
          options={typeOptions}
          defaultValue={location?.type}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Region (optional)"
          name="region"
          defaultValue={location?.region}
          placeholder="e.g. Northern Greece"
        />
        <ArrayField
          label="Associated Deities"
          name="associatedDeities"
          defaultValue={location?.associatedDeities}
          placeholder="Zeus, Hera, Poseidon"
          hint="Separate with commas"
        />
      </div>

      <TextareaField
        label="Significance"
        name="significance"
        defaultValue={location?.significance}
        required
        rows={2}
        placeholder="Explain the mythological significance..."
      />

      <TextareaField
        label="Description"
        name="description"
        defaultValue={location?.description}
        required
        rows={5}
        placeholder="Describe this location..."
      />

      <FormField
        label="Image URL (optional)"
        name="imageUrl"
        defaultValue={location?.imageUrl}
        placeholder="https://..."
      />

      {state.error && (
        <p className="font-body text-sm text-danger-light border border-danger/30 bg-danger/10 px-4 py-3">
          {state.error}
        </p>
      )}

      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2.5 bg-gold text-bg-primary font-heading text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Saving..." : location ? "Update Location" : "Create Location"}
        </button>
        <Link
          href="/dashboard/locations"
          className="px-6 py-2.5 border border-border text-text-muted font-heading text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
