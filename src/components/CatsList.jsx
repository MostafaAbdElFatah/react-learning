import { CatCard } from "./CatCard.jsx";

export function CatsList({ cats }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </ul>
  );
}
