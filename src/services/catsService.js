import { cats } from "../data/cats.ts";

export const catsService = {
  get cats() {
    return cats;
  },

  get shortlist() {
    return this.cats.filter((cat) => cat.liked);
  },
};
