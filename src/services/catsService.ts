import { cats } from "../types/cats.ts";
import type { Cat } from "../models/cat.ts";

export const catsService = {
  get cats(): Cat[] {
    return cats;
  },

  getByIds(ids: Cat["id"][]): Cat[] {
    return this.cats.filter((cat) => ids.includes(cat.id));
  },
};
