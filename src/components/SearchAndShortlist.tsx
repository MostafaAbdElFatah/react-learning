import { Search } from "./Search.tsx";
import { Shortlist } from "./Shortlist.tsx";
import { catsService } from "../services/catsService.ts";

export function SearchAndShortlist() {
  return (
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search />
      <Shortlist shortlist={catsService.shortlist} />
    </div>
  );
}
