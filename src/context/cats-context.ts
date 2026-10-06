import { createContext, use } from "react";
import type { Cat, NewCat } from "../models/cat";

type CatsContextValue = {
  cats: Cat[];
  addCat: (newCat: NewCat) => void;
};

export const CatsContext = createContext<CatsContextValue | null>(null);

export function useCats() {
  const context = use(CatsContext);

  if (!context) {
    throw new Error("useCats must be used within a CatsProvider");
  }

  return context;
}
