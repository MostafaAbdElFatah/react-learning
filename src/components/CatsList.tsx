import { CatCard } from "./CatCard.tsx";
import type { Cat } from "../models/cat.ts";

export function CatsList({ cats }: { cats: Cat[] }) {
  if (cats.length === 0) {
    return (
      <p className="mt-8 text-center text-slate-500">
        No cats match your search.
      </p>
    );
  }

  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </ul>
  );
}
