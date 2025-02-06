import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
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
      </main>
    </div>
  );
}
