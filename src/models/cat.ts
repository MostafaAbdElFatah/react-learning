export type Cat = {
  id: number;
  name: string;
  trait: string;
  image: string;
};

// What the user provides when adding a cat; id and image are assigned by the service
export type NewCat = Pick<Cat, "name" | "trait">;
