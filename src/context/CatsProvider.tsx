import { useState, type ReactNode } from "react";
import { CatsContext } from "./cats-context.ts";
import { catsService } from "../services/catsService.ts";
import type { Cat, NewCat } from "../models/cat.ts";

type CatsProviderProps = {
  initialCats: Cat[];
  children: ReactNode;
};

export function CatsProvider({ initialCats, children }: CatsProviderProps) {
  const [cats, setCats] = useState(initialCats);

  function addCat(newCat: NewCat) {
    setCats((prev) => [...prev, catsService.createCat(prev, newCat)]);
  }

  return <CatsContext value={{ cats, addCat }}>{children}</CatsContext>;
}
