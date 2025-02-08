"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const [character, setCharacter] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Search handle with debounce 
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (character.trim() !== '') {
        updateSearchParams(character.toLowerCase());
      } else {
        clearSearchParams();
      }
    }, 200); 

    return () => clearTimeout(debounceTimer); 
  }, [character]);

  // Search handle with Enter
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (character.trim() === '') {
      return alert('Por favor, ingresa un nombre para buscar.');
    }
    updateSearchParams(character.toLowerCase());
  };

  
  const updateSearchParams = useCallback((character: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('character', character);
    router.push(`${window.location.pathname}?${params.toString()}`);
  }, [router, searchParams]);

  // Clean the search
  const clearSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('character');
    router.push(window.location.pathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <input
          type="text"
          name='character'
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          placeholder='Spider Man'
          className='searchbar__input'
        />
        <button type='submit' className='ml-3 z-10'>
          <Image
            src="/magnifying-glass.svg"
            alt="search icon"
            width={60}
            height={60}
            className='object-contain'
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;