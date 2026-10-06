import { LikeButton } from "./LikeButton.tsx";
import type { Cat } from "../models/cat.ts";

type CatCardProps = {
  cat: Cat;
};

export function CatCard({ cat }: CatCardProps) {
  return (
    <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
      <img
        className="aspect-square object-cover"
        alt={cat.name}
        src={cat.image}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{cat.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{cat.trait}</p>
        </div>
        <LikeButton id={cat.id} />
      </div>
    </li>
  );
}
