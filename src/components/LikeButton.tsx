import { useState, type CSSProperties } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
  liked: boolean;
};

// 8 dots around the heart, alternating near/far so the burst feels organic
const PARTICLES = [
  { angle: 0, distance: 22, color: "bg-pink-500" },
  { angle: 45, distance: 18, color: "bg-violet-400" },
  { angle: 90, distance: 22, color: "bg-amber-400" },
  { angle: 135, distance: 18, color: "bg-sky-400" },
  { angle: 180, distance: 22, color: "bg-pink-500" },
  { angle: 225, distance: 18, color: "bg-violet-400" },
  { angle: 270, distance: 22, color: "bg-amber-400" },
  { angle: 315, distance: 18, color: "bg-sky-400" },
];

export function LikeButton({ liked }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(liked);
  // Bumped on every click so the animations remount and replay
  const [clicks, setClicks] = useState(0);

  function toggleLike() {
    setIsLiked((prev) => !prev);
    setClicks((prev) => prev + 1);
  }

  let heartClassName =
    "stroke-slate-200";//group-hover:stroke-none group-hover:fill-pink-400
  if (isLiked) {
    heartClassName = "fill-pink-500 stroke-none";
    if (clicks > 0) heartClassName += " animate-heart-pop";
  } else if (clicks > 0) {
    heartClassName += " animate-heart-unpop";
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
      {isLiked && clicks > 0 && (
        <span
          key={`burst-${clicks}`}
          aria-hidden
          className="pointer-events-none absolute inset-0 motion-reduce:hidden"
        >
          <span className="absolute inset-0 animate-like-ring rounded-full" />
          {PARTICLES.map((particle) => (
            <span
              key={particle.angle}
              style={
                {
                  "--angle": `${particle.angle}deg`,
                  "--distance": `${particle.distance}px`,
                } as CSSProperties
              }
              className={`absolute top-1/2 left-1/2 -mt-0.75 -ml-0.75 size-1.5 animate-like-particle rounded-full ${particle.color}`}
            />
          ))}
        </span>
      )}

      <Heart
        key={`heart-${clicks}`}
        className={`relative transition-colors motion-reduce:animate-none ${heartClassName}`}
      />
    </button>
  );
}
