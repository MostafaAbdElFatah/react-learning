import { Header } from "./components/Header.jsx";
import { Container } from "./components/Container.jsx";
import { PageWrapper } from "./components/PageWrapper.jsx";
import { SearchAndShortlist } from "./components/SearchAndShortlist.jsx";
import { CatsList } from "./components/CatsList.jsx";
import { NewCatForm } from "./components/NewCatForm.jsx";
import { Search } from "./components/Search.jsx";
import { Shortlist } from "./components/Shortlist.jsx";
import { catsService } from "./services/catsService.js";

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
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <Shortlist shortlist={catsService.shortlist} />
      </div>
      {/* <SearchAndShortlist shortlist={catsService.shortlist} /> */}
      <CatsList cats={catsService.cats} />
      <NewCatForm />
    </main>
  );
}
