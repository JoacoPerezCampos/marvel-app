import { getCharacters } from "@/api/marvelAPI";
import {  CustomFilter, Hero, SearchBar } from "@/components";
import Card from "@/components/Card";


export default async function Home() {
  const allCharacters = await getCharacters();
  const isDataEmpty = !Array.isArray(allCharacters) || allCharacters.length <1 || !allCharacters;
    
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4x1 font-extrabold">Catalog</h1>
            <p>Search your favourite Marvel character</p>
          </div>
          <div className="home_filters">
            <SearchBar />
            <div className="home__filters-container"></div>
              <CustomFilter title="comics"/>
              <CustomFilter title="series"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <div className="home__characters-wrapper">
              {allCharacters?.map((character) => <Card key={character.id} character={character}/>)}
            </div>
          </div>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCharacters?.message}</p>
          </div>
        )}
      </main>
    </div>
  );
}
