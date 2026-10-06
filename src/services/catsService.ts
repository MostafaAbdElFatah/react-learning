import { cats } from "../types/cats.ts";
import type { Cat, NewCat } from "../models/cat.ts";

const PLACEHOLDER_IMAGE = "https://placecats.com/400/400";

export const catsService = {
  get cats(): Cat[] {
    return cats;
  },

  getByIds(cats: Cat[], ids: Cat["id"][]): Cat[] {
    return cats.filter((cat) => ids.includes(cat.id));
  },

  // Case-insensitive match on name or trait; an empty query returns every cat
  search(cats: Cat[], query: string): Cat[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return cats;
    return cats.filter(
      (cat) =>
        cat.name.toLowerCase().includes(normalized) ||
        cat.trait.toLowerCase().includes(normalized),
    );
  },

  createCat(cats: Cat[], newCat: NewCat): Cat {
    const nextId = Math.max(0, ...cats.map((cat) => cat.id)) + 1;
    return { id: nextId, image: PLACEHOLDER_IMAGE, ...newCat };
  },
};
