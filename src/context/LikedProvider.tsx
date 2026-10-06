import { useState, type ReactNode } from "react";
import { LikedContext } from "./liked-context.ts";
import type { Cat } from "../models/cat.ts";

type LikedProviderProps = {
  initialLiked?: Cat["id"][];
  children: ReactNode;
};

export function LikedProvider({
  initialLiked = [],
  children,
}: LikedProviderProps) {
  const [liked, setLiked] = useState(initialLiked);

  function isLiked(id: Cat["id"]) {
    return liked.includes(id);
  }

  function toggleLike(id: Cat["id"]) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id],
    );
  }

  function unlike(id: Cat["id"]) {
    setLiked((prev) => prev.filter((catId) => catId !== id));
  }

  return (
    <LikedContext value={{ liked, isLiked, toggleLike, unlike }}>
      {children}
    </LikedContext>
  );
}
