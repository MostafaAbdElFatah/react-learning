import type { ComponentProps } from "react";
import { Search } from "./Search.tsx";
import { Shortlist } from "./Shortlist.tsx";

export function SearchAndShortlist(props: ComponentProps<typeof Search>) {
  return (
    <div className="mt-24 grid gap-8 sm:grid-cols-2">
      <Search {...props} />
      <Shortlist />
    </div>
  );
}
