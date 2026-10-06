import { Delete } from "lucide-react";
import { useRef } from "react";

type SearchProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function Search({ query, onQueryChange }: SearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label htmlFor="search" className="font-medium">
        Search by name or trait
      </label>
      <div className="mt-2 flex items-center gap-4">
        <input
          ref={searchInput}
          placeholder="curious..."
          name="search"
          id="search"
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
        <button
          type="button"

          disabled={!query}
          aria-label="Clear search"
          className="inline-block rounded bg-cyan-300 px-4 py-2 pr-3! pl-2.5! font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none disabled:opacity-50 disabled:hover:bg-cyan-300"
          onClick={() => {
            onQueryChange("");
            searchInput.current?.focus();
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
