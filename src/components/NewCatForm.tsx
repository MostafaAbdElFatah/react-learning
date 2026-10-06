import { useActionState } from "react";
import { useCats } from "../context/cats-context.ts";
import {
  validateNewCat,
  type NewCatErrors,
} from "../validation/newCatValidation.ts";

type FormState = {
  errors: NewCatErrors;
  // Echoed back on error so React's post-action form reset keeps what the user typed
  values: { name: string; trait: string };
  addedName?: string;
};

const initialState: FormState = { errors: {}, values: { name: "", trait: "" } };

const inputClassName =
  "max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none aria-invalid:ring-red-400";

export function NewCatForm() {
  const { cats, addCat } = useCats();

  const [state, formAction] = useActionState(
    (_prev: FormState, formData: FormData): FormState => {
      const values = {
        name: String(formData.get("name") ?? ""),
        trait: String(formData.get("trait") ?? ""),
      };
      const result = validateNewCat(values, cats);

      if (!result.success) return { errors: result.errors, values };

      addCat(result.data);
      return { ...initialState, addedName: result.data.name };
    },
    initialState,
  );

  return (
    <fieldset className="mt-12 flex items-center justify-between rounded-lg bg-white p-8 shadow ring ring-black/5">
      <legend className="bg-white px-2 text-lg font-semibold text-gray-700">
        New cat
      </legend>
      <form
        noValidate
        action={formAction}
        className="mt-4 flex w-full flex-col items-start gap-4"
      >
        <div className="grid w-full gap-6 md:grid-cols-3">
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className={inputClassName}
              id="name"
              type="text"
              name="name"
              required
              defaultValue={state.values.name}
              aria-invalid={!!state.errors.name}
              aria-describedby={state.errors.name ? "name-error" : undefined}
            />
            {state.errors.name && (
              <p id="name-error" className="text-sm text-red-600">
                {state.errors.name}
              </p>
            )}
          </fieldset>
          <fieldset className="flex w-full flex-col gap-1">
            <label htmlFor="trait">Personality trait</label>
            <input
              className={inputClassName}
              id="trait"
              type="text"
              name="trait"
              required
              defaultValue={state.values.trait}
              aria-invalid={!!state.errors.trait}
              aria-describedby={state.errors.trait ? "trait-error" : undefined}
            />
            {state.errors.trait && (
              <p id="trait-error" className="text-sm text-red-600">
                {state.errors.trait}
              </p>
            )}
          </fieldset>
          <fieldset
            disabled
            className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
          >
            <label htmlFor="avatar_url">Profile pic</label>
            <input
              className={inputClassName}
              id="avatar_url"
              type="file"
              name="avatar_url"
            />
          </fieldset>
        </div>
        <button
          className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          type="submit"
        >
          Add cat
        </button>
        <p role="status" className="text-sm text-green-700">
          {state.addedName && `${state.addedName} was added to the list.`}
        </p>
      </form>
    </fieldset>
  );
}
