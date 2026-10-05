import { cats } from "../types/cats.ts";
import type { Cat } from "../models/cat.ts";

export const catsService = {
  get cats(): Cat[] {
    return cats;
  },

  get shortlist(): Cat[] {
    return this.cats.filter((cat) => cat.liked);
  },
};
