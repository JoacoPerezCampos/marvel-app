"use client";
import { useState } from 'react';
import SearchComic from './SearchComics';

const SearchBar = () => {
    const [comic, setComic] = useState('')
    
    const handleSearch = () => {}
    return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className='searchbar__item'>
           <SearchComic
            comic={comic}
            setComic={setComic}/>
        </div>
    </form>
  )
}

export default SearchBar