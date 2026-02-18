"use client";

import { useActionState } from "react";
import { createCreature, updateCreature } from "@/lib/actions/creatures";
import type { Creature } from "@/lib/types";
import FormField from "./FormField";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import Link from "next/link";

interface CreatureFormProps {
  creature?: Creature;
}

const initialState = { error: "" };

export default function CreatureForm({ creature }: CreatureFormProps) {
  const action = creature ? updateCreature.bind(null, creature.id) : createCreature;
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Name"
          name="name"
          defaultValue={creature?.name}
          required
          placeholder="e.g. Medusa"
        />
        <FormField
          label="Type"
          name="type"
          defaultValue={creature?.type}
          required
          placeholder="e.g. Gorgon, Sea Monster, Dragon"
        />
      </div>

      <TextareaField
        label="Description"
        name="description"
        defaultValue={creature?.description}
        required
        rows={4}
        placeholder="Describe this creature..."
      />

      <ArrayField
        label="Abilities"
        name="abilities"
        defaultValue={creature?.abilities}
        required
        placeholder="petrifying gaze, serpent hair, flight"
        hint="Separate multiple abilities with commas"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Weakness (optional)"
          name="weakness"
          defaultValue={creature?.weakness}
          placeholder="e.g. Averted gaze via reflection"
        />
        <FormField
          label="Image URL (optional)"
          name="imageUrl"
          defaultValue={creature?.imageUrl}
          placeholder="https://..."
        />
      </div>

      <ArrayField
        label="Famous Encounters"
        name="famousEncounters"
        defaultValue={creature?.famousEncounters}
        required
        placeholder="Perseus, Heracles, Odysseus"
        hint="Separate with commas"
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
          {isPending ? "Saving..." : creature ? "Update Creature" : "Create Creature"}
        </button>
        <Link
          href="/dashboard/creatures"
          className="px-6 py-2.5 border border-border text-text-muted font-heading text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
