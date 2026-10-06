import { Search } from "./Search.tsx";
import { Shortlist } from "./Shortlist.tsx";

export function SearchAndShortlist() {
  return (
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search />
      <Shortlist />
    </div>
  );
}
