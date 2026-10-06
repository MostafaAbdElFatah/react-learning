import { Heart } from "lucide-react";
import { LikeBurst } from "./LikeBurst.tsx";
import type { Cat } from "../models/cat";
import { useLiked } from "../context/liked-context.ts";
import { useState } from "react";

function getHeartClassName(isLiked: boolean, hasClicked: boolean) {
  if (isLiked) {
    return hasClicked
      ? "fill-pink-500 stroke-none animate-heart-pop"
      : "fill-pink-500 stroke-none";
  }
  return hasClicked
    ? "stroke-slate-200 animate-heart-unpop"
    : "stroke-slate-200";
}

export function LikeButton({ id }: { id: Cat["id"] }) {
  const { liked, setLiked } = useLiked();
  // Bumped on every click so the animations remount and replay
  const [clicks, setClicks] = useState(0);
  const isLiked = liked.includes(id);
  const hasClicked = clicks > 0;

  function toggleLike() {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id],
    );
    setClicks((prev) => prev + 1);
  }

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={isLiked}
      aria-label={isLiked ? "Unlike" : "Like"}
      className="group relative grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-pink-400"
    >
      {/* Burst: only when the user likes, not on first render */}
      {isLiked && hasClicked && <LikeBurst key={`burst-${clicks}`} />}

      <Heart
        key={`heart-${clicks}`}
        className={`relative transition-colors motion-reduce:animate-none ${getHeartClassName(isLiked, hasClicked)}`}
      />
    </button>
  );
}
