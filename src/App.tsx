import { Header } from "./components/Header.tsx";
import { Container } from "./components/Container.tsx";
import { PageWrapper } from "./components/PageWrapper.tsx";
// import { SearchAndShortlist } from "./components/SearchAndShortlist.tsx";
import { CatsList } from "./components/CatsList.tsx";
import { NewCatForm } from "./components/NewCatForm.tsx";
import { Search } from "./components/Search.tsx";
import { Shortlist } from "./components/Shortlist.tsx";
import { catsService } from "./services/catsService.ts";
import { LikedContext } from "./context/liked-context.ts";
import { useState } from "react";
import type { Cat } from "./models/cat.ts";

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
  const [liked, setLiked] = useState<Cat["id"][]>([1, 3, 5]);
  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <Shortlist />
        </div>
        {/* <SearchAndShortlist /> */}
        <CatsList cats={catsService.cats} />
      </LikedContext>

      <NewCatForm />
    </main>
  );
}
