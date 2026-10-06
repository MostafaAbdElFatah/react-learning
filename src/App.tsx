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
import { CatsProvider } from "./context/CatsProvider.tsx";
import { useCats } from "./context/cats-context.ts";
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
  return (
    <CatsProvider initialCats={catsService.cats}>
      <LikedProvider initialLiked={[1, 3, 5]}>
        <CatsPage />
      </LikedProvider>
    </CatsProvider>
  );
}

function CatsPage() {
  const { cats } = useCats();
  const [query, setQuery] = useState("");
  const filteredCats = catsService.search(cats, query);

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search query={query} onQueryChange={setQuery} />
        <Shortlist />
      </div>
      {/* <SearchAndShortlist /> */}
      <CatsList cats={filteredCats} />
      <NewCatForm />
    </main>
  );
}
