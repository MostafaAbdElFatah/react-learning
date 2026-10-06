import { cats } from "../types/cats.ts";
import type { Cat } from "../models/cat.ts";

export const catsService = {
  get cats(): Cat[] {
    return cats;
  },

  getByIds(ids: Cat["id"][]): Cat[] {
    return this.cats.filter((cat) => ids.includes(cat.id));
  },

  // Case-insensitive match on name or trait; an empty query returns every cat
  search(query: string): Cat[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return this.cats;
    return this.cats.filter(
      (cat) =>
        cat.name.toLowerCase().includes(normalized) ||
        cat.trait.toLowerCase().includes(normalized),
    );
  },
};
