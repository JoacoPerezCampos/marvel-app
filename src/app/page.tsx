import { getCharacters } from "@/api/marvelAPI";
import { Hero, SearchBar, ShowMore } from "@/components";
import Card from "@/components/Card";

export default async function Home({ searchParams }: { searchParams: Record<string, string>} ) {
  const limit = parseInt(searchParams.limit) || 20;
  const pageNumber = parseInt(searchParams.pageNumber) || 1;
  const offset = (pageNumber - 1) * limit;

  const allCharacters = await getCharacters(
    { character: searchParams.character || "" },
    limit,
    offset
  );

  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 id="searchBar" className="text-4xl font-extrabold">Catalog</h1>
          <p className="text-2xl">Search your favourite Marvel character</p>
        </div>
        <div className="home_filters">
          <SearchBar />
          <div className="home__filters-container"></div>
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__characters-wrapper">
            {allCharacters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          <ShowMore 
            pageNumber={pageNumber}
            isNext={allCharacters.length === limit}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      )}
    </main>
  );
}
