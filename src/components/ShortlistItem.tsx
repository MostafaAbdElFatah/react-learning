import { useLiked } from "../context/liked-context.ts";
import type { Cat } from "../models/cat.ts";
import { X } from "lucide-react";

type ShortlistItemProps = {
  cat: Cat;
};

export function ShortlistItem({ cat }: ShortlistItemProps) {
  const { setLiked } = useLiked();
  function removeFromShortlist() {
    setLiked((prev) => prev.filter((catId) => catId !== cat.id));
  }

  return (
    <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
      <img
        height="32"
        width="32"
        alt={cat.name}
        className="aspect-square w-8 object-cover"
        src={cat.image}
      />
      <p className="px-3 text-sm text-slate-800">{cat.name}</p>
      <button
        type="button"
        onClick={removeFromShortlist}
        aria-label={`Remove ${cat.name} from shortlist`}
        className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
      >
        <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
      </button>
    </li>
  );
}
