import { cats } from "../types/cats.ts";
import type { Cat } from "../models/cat.ts";

export const catsService = {
  get cats(): Cat[] {
    return cats;
  },
};
