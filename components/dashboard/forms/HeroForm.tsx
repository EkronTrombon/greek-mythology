"use client";

import { useActionState } from "react";
import { createHero, updateHero } from "@/lib/actions/heroes";
import type { Hero } from "@/lib/types";
import FormField from "./FormField";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import Link from "next/link";

interface HeroFormProps {
  hero?: Hero;
}

const initialState = { error: "" };

export default function HeroForm({ hero }: HeroFormProps) {
  const action = hero ? updateHero.bind(null, hero.id) : createHero;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          defaultValue={hero?.name}
          required
          placeholder="e.g. Heracles"
        />
        <FormField
          label="Title"
          name="title"
          defaultValue={hero?.title}
          required
          placeholder="e.g. The Greatest Hero"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Father"
          name="father"
          defaultValue={hero?.parentage?.father}
          placeholder="e.g. Zeus"
        />
        <FormField
          label="Mother"
          name="mother"
          defaultValue={hero?.parentage?.mother}
          placeholder="e.g. Alcmene"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="divine"
          name="divine"
          type="checkbox"
          defaultChecked={hero?.parentage?.divine}
          className="w-4 h-4 accent-gold"
        />
        <label
          htmlFor="divine"
          className="font-heading text-xs tracking-[0.15em] uppercase text-text-muted"
        >
          Has divine parentage (demigod)
        </label>
      </div>

      <ArrayField
        label="Famous For"
        name="famousFor"
        defaultValue={hero?.famousFor}
        required
        placeholder="Twelve Labors, defeating the Hydra"
        hint="Separate multiple achievements with commas"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <ArrayField
          label="Weapons"
          name="weapons"
          defaultValue={hero?.weapons}
          placeholder="sword, shield, bow"
          hint="Separate with commas"
        />
        <ArrayField
          label="Companions"
          name="companions"
          defaultValue={hero?.companions}
          placeholder="Iolaus, Theseus"
          hint="Separate with commas"
        />
      </div>

      <FormField
        label="Fate"
        name="fate"
        defaultValue={hero?.fate}
        placeholder="e.g. Achieved immortality and joined the gods on Olympus"
      />

      <TextareaField
        label="Description"
        name="description"
        defaultValue={hero?.description}
        required
        rows={5}
        placeholder="Describe this hero..."
      />

      <FormField
        label="Image URL (optional)"
        name="imageUrl"
        defaultValue={hero?.imageUrl}
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
          {isPending ? "Saving..." : hero ? "Update Hero" : "Create Hero"}
        </button>
        <Link
          href="/dashboard/heroes"
          className="px-6 py-2.5 border border-border text-text-muted font-heading text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
