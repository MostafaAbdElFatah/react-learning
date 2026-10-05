import { cats } from "../data/cats.js";

export const catsService = {
  get cats() {
    return cats;
  },

  get shortlist() {
    return this.cats.filter((cat) => cat.liked);
  },
};
