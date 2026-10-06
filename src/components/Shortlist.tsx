import { HeartIcon } from "./HeartIcon.tsx";
import { ShortlistItem } from "./ShortlistItem.tsx";
import { useLiked } from "../context/liked-context.ts";
import { catsService } from "../services/catsService.ts";

export function Shortlist() {
  const { liked } = useLiked();
  const shortlist = catsService.getByIds(liked);

  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <HeartIcon className="inline-block size-6 fill-pink-500 stroke-pink-500" />
      </h2>
      {shortlist.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">
          No cats shortlisted yet — tap a heart to add one.
        </p>
      ) : (
        <ul className="mt-4 flex flex-wrap gap-4">
          {shortlist.map((cat) => (
            <ShortlistItem key={cat.id} cat={cat} />
          ))}
        </ul>
      )}
    </div>
  );
}
