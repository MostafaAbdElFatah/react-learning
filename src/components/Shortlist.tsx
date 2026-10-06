import { HeartIcon } from "./HeartIcon.tsx";
import { ShortlistItem } from "./ShortlistItem.tsx";
import { LikedContext, useLiked } from "../context/liked-context.ts";
import { catsService } from "../services/catsService.ts";

export function Shortlist() {
  const { liked } = useLiked();
  const shortlist = catsService.cats.filter((cat) => liked.includes(cat.id));

  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <HeartIcon className="inline-block size-6 fill-pink-500 stroke-pink-500" />
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {shortlist.map((cat) => (
          <ShortlistItem key={cat.id} cat={cat} />
        ))}
      </ul>
    </div>
  );
}
