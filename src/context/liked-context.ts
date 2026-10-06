import { createContext, use } from "react";
import type { Cat } from "../models/cat";

type LikedContextValue = {
  liked: Cat["id"][];
  isLiked: (id: Cat["id"]) => boolean;
  toggleLike: (id: Cat["id"]) => void;
  unlike: (id: Cat["id"]) => void;
};

export const LikedContext = createContext<LikedContextValue | null>(null);

export function useLiked() {
  const context = use(LikedContext);

  if (!context) {
    throw new Error("useLiked must be used within a LikedProvider");
  }

  return context;
}
