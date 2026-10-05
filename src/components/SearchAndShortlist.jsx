import { Search } from "./Search.jsx";
import { Shortlist } from "./Shortlist.jsx";


export function SearchAndShortlist() {
  return (
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search />
      <Shortlist shortlist={catsService.shortlist} />
    </div>
  );
}
