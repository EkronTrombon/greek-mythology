"use client";

import { useActionState } from "react";
import { createGod, updateGod } from "@/lib/actions/gods";
import type { God } from "@/lib/types";
import FormField from "./FormField";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import Link from "next/link";

interface GodFormProps {
  god?: God;
}

const initialState = { error: "" };

export default function GodForm({ god }: GodFormProps) {
  const action = god ? updateGod.bind(null, god.id) : createGod;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          defaultValue={god?.name}
          required
          placeholder="e.g. Zeus"
        />
        <FormField
          label="Title"
          name="title"
          defaultValue={god?.title}
          required
          placeholder="e.g. King of the Gods"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Greek Name"
          name="greekName"
          defaultValue={god?.greekName}
          placeholder="e.g. Ζεύς"
        />
        <FormField
          label="Roman Name"
          name="romanName"
          defaultValue={god?.romanName}
          placeholder="e.g. Jupiter"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Father"
          name="father"
          defaultValue={god?.parentage?.father}
          placeholder="e.g. Cronus"
        />
        <FormField
          label="Mother"
          name="mother"
          defaultValue={god?.parentage?.mother}
          placeholder="e.g. Rhea"
        />
      </div>

      <FormField
        label="Residence"
        name="residence"
        defaultValue={god?.residence}
        placeholder="e.g. Mount Olympus"
      />

      <ArrayField
        label="Domains"
        name="domain"
        defaultValue={god?.domain}
        required
        placeholder="sky, thunder, law, order"
        hint="Separate multiple values with commas"
      />

      <ArrayField
        label="Symbols"
        name="symbols"
        defaultValue={god?.symbols}
        required
        placeholder="thunderbolt, eagle, oak tree"
        hint="Separate multiple values with commas"
      />

      <TextareaField
        label="Description"
        name="description"
        defaultValue={god?.description}
        required
        rows={5}
        placeholder="Describe this god..."
      />

      <FormField
        label="Image URL (optional)"
        name="imageUrl"
        defaultValue={god?.imageUrl}
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
          {isPending ? "Saving..." : god ? "Update God" : "Create God"}
        </button>
        <Link
          href="/dashboard/gods"
          className="px-6 py-2.5 border border-border text-text-muted font-heading text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
