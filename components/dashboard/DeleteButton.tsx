"use client";

import { useTransition } from "react";

interface DeleteButtonProps {
  action: () => Promise<void>;
  entityName: string;
}

export default function DeleteButton({ action, entityName }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${entityName}"? This cannot be undone.`)) {
      return;
    }
    startTransition(() => {
      action();
    });
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="px-4 py-2 border border-danger/40 text-danger hover:bg-danger/10 font-heading text-xs tracking-[0.1em] uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
