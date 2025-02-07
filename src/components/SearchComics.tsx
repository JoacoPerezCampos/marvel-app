"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, Transition } from "@headlessui/react";
import { SearchComicProps } from "@/types";
import { comics } from "@/constants";


const SearchComic = ({ comic, setComic }: SearchComicProps) => {
    const [query, setQuery] = useState("");

    const filteredComics =
        query === ""
            ? comics
            : comics.filter((item) => (
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, "")
                    )));

    return (
        <div className="search-comic">
            <Combobox value={comic} onChange={setComic} onClose={() => setQuery('')}>
                <div className="relative w-full">
                    {/* Button for the combobox. Click on the icon to see the complete dropdown */}
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/favicon.ico"
                            width={20}
                            height={20}
                            className="m1-4"
                            alt="marvel logo"
                        />
                    </Combobox.Button>
                    {/* Input field for searching */}
                    <ComboboxInput
                        className="search-comic__input"
                        placeholder="Amazing Spiderman"
                        displayValue={(comic: string) => comic}
                        onChange={(e) => setQuery(e.target.value)} // Update the search query when the input changes
                    />
                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>
                            {filteredComics.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className="search-comic__options">
                                    Not found results for "{query}"
                                </Combobox.Option>
                            ) : (
                                filteredComics.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `relative seach-comic__option ${active ? `bg-primary-blue text-white` : `text-gray-900`}
                                   `}
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`bloc truncate ${selected} ? 'font-medium' : 'font-normal}`}>{item}</span>
                                                {selected ? (
                                                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 &{active ? 'text-white' : 'text-teal-600'}`}>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option >
                                ))
                            )}
                        </ComboboxOptions>

                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchComic;
