"use client";

import { useActionState } from "react";
import { createMyth, updateMyth } from "@/lib/actions/myths";
import type { Myth } from "@/lib/types";
import FormField from "./FormField";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import SelectField from "./SelectField";
import Link from "next/link";

interface MythFormProps {
  myth?: Myth;
}

const initialState = { error: "" };

const categoryOptions = [
  { value: "creation", label: "Creation" },
  { value: "heroic", label: "Heroic" },
  { value: "divine", label: "Divine" },
  { value: "tragedy", label: "Tragedy" },
  { value: "war", label: "War" },
  { value: "love", label: "Love" },
];

export default function MythForm({ myth }: MythFormProps) {
  const action = myth ? updateMyth.bind(null, myth.id) : createMyth;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Title"
          name="title"
          defaultValue={myth?.title}
          required
          placeholder="e.g. The Odyssey"
        />
        <SelectField
          label="Category"
          name="category"
          options={categoryOptions}
          defaultValue={myth?.category}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ArrayField
          label="Characters"
          name="characters"
          defaultValue={myth?.characters}
          required
          placeholder="Odysseus, Penelope, Poseidon"
          hint="Separate with commas"
        />
        <ArrayField
          label="Locations"
          name="locations"
          defaultValue={myth?.locations}
          placeholder="Troy, Ithaca, Mediterranean Sea"
          hint="Separate with commas"
        />
      </div>

      <TextareaField
        label="Summary"
        name="summary"
        defaultValue={myth?.summary}
        required
        rows={3}
        placeholder="Brief overview of the myth..."
      />

      <FormField
        label="Moral Lesson (optional)"
        name="moralLesson"
        defaultValue={myth?.moralLesson}
        placeholder="e.g. Wisdom and cunning can overcome brute strength"
      />

      <TextareaField
        label="Full Description"
        name="description"
        defaultValue={myth?.description}
        required
        rows={6}
        placeholder="Detailed description of the myth..."
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
          {isPending ? "Saving..." : myth ? "Update Myth" : "Create Myth"}
        </button>
        <Link
          href="/dashboard/myths"
          className="px-6 py-2.5 border border-border text-text-muted font-heading text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
