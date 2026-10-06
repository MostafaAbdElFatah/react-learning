import type { CSSProperties } from "react";

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

export function LikeBurst() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 motion-reduce:hidden"
    >
      <span className="animate-like-ring absolute inset-0 rounded-full" />
      {PARTICLES.map((particle) => (
        <span
          key={particle.angle}
          style={
            {
              "--angle": `${particle.angle}deg`,
              "--distance": `${particle.distance}px`,
            } as CSSProperties
          }
          className={`animate-like-particle absolute top-1/2 left-1/2 -mt-0.75 -ml-0.75 size-1.5 rounded-full ${particle.color}`}
        />
      ))}
    </span>
  );
}
