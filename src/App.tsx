import { Header } from "./components/Header.tsx";
import { Container } from "./components/Container.tsx";
import { PageWrapper } from "./components/PageWrapper.tsx";
// import { SearchAndShortlist } from "./components/SearchAndShortlist.tsx";
import { CatsList } from "./components/CatsList.tsx";
import { NewCatForm } from "./components/NewCatForm.tsx";
import { Search } from "./components/Search.tsx";
import { Shortlist } from "./components/Shortlist.tsx";
import { catsService } from "./services/catsService.ts";
import { LikedProvider } from "./context/LikedProvider.tsx";
import { useState } from "react";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [query, setQuery] = useState("");
  const filteredCats = catsService.search(query);

  return (
    <main>
      <LikedProvider initialLiked={[1, 3, 5]}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search query={query} onQueryChange={setQuery} />
          <Shortlist />
        </div>
        {/* <SearchAndShortlist /> */}
        <CatsList cats={filteredCats} />
      </LikedProvider>

      <NewCatForm />
    </main>
  );
}
