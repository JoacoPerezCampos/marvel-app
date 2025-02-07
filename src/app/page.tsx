import { getCharacters } from "@/api/marvelAPI";
import { CustomFilter, Hero, SearchBar } from "@/components";
import Card from "@/components/Card";


export default async function Home() {
  const allCharacters = await getCharacters();
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length < 1 || !allCharacters;
  
  
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalog</h1>
          <p className="text 2xl">Search your favourite Marvel character</p>
        </div>
        <div className="home_filters">
          <SearchBar />
          <div className="home__filters-container"></div>
          <CustomFilter title="comics" />
          <CustomFilter title="series" />
        </div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__characters-wrapper">
            {allCharacters?.map((character) => <Card key={character.id} character={character} />)}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allCharacters?.message}</p>
        </div>
      )}
      
    </main>

  );
}
