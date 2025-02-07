"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [character, setCharacter] = useState('')
    const router = useRouter();
    
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(character === ''){
        return alert('Please fill in the search bar')
      }
      updateSearchParams(character.toLowerCase());

    }

    const updateSearchParams = (character: string) => {
      const searchParams = new URLSearchParams(window.location.search);
      if(character){
        searchParams.set('character', character)
      }else{
        searchParams.delete('character')
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathName)

    }

    
    return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className='searchbar__item'>
        <button type='submit' className='-ml-3 z-10'>
          <Image
            src="/magnifying-glass.svg"
            alt="search icon"
            width={40}
            height={40}
            className='object-contain' />
        </button>
        </div>
        <input 
        type="text" 
        name='character' 
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        placeholder='Spider Man'/>
    </form>
  )
}

export default SearchBar