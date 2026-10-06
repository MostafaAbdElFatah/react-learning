import type { Cat, NewCat } from "../models/cat.ts";

export type NewCatErrors = Partial<Record<keyof NewCat, string>>;

export type NewCatValidationResult =
  { success: true; data: NewCat } | { success: false; errors: NewCatErrors };

const NAME_MIN = 2;
const NAME_MAX = 30;
const TRAIT_MIN = 3;
const TRAIT_MAX = 50;

export function validateNewCat(
  input: { name: unknown; trait: unknown },
  existingCats: Cat[],
): NewCatValidationResult {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const trait = typeof input.trait === "string" ? input.trait.trim() : "";
  const errors: NewCatErrors = {};

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < NAME_MIN || name.length > NAME_MAX) {
    errors.name = `Name must be ${NAME_MIN}–${NAME_MAX} characters.`;
  } else if (
    existingCats.some((cat) => cat.name.toLowerCase() === name.toLowerCase())
  ) {
    errors.name = `There's already a cat called ${name}.`;
  }

  if (!trait) {
    errors.trait = "Personality trait is required.";
  } else if (trait.length < TRAIT_MIN || trait.length > TRAIT_MAX) {
    errors.trait = `Trait must be ${TRAIT_MIN}–${TRAIT_MAX} characters.`;
  }

  if (errors.name || errors.trait) return { success: false, errors };
  return { success: true, data: { name, trait } };
}
