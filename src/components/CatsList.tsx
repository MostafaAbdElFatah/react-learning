import { CatCard } from "./CatCard.tsx";
import type { Cat } from "../models/cat.ts";


export function CatsList({ cats }: { cats: Cat[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </ul>
  );
}
