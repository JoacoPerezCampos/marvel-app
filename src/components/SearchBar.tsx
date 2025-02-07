"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [character, setCharacter] = useState('')
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (character === '') {
      return alert('Please fill in the search bar')
    }
    updateSearchParams(character.toLowerCase());

  }

  const updateSearchParams = (character: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (character) {
      searchParams.set('character', character)
    } else {
      searchParams.delete('character')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName)

  }


  return (
    <form id="searchBar" className="searchbar" onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <input
          type="text"
          name='character'
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          placeholder='Spider Man'
          className='searchbar__input' />
        <button type='submit' className='ml-3 z-10'>
          <Image
            src="/magnifying-glass.svg"
            alt="search icon"
            width={60}
            height={60}
            className='object-contain' />
        </button>
      </div>
    </form>
  )
}

export default SearchBar