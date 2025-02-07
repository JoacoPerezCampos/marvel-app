import { getCharacters } from '@/services/marvelAPI';
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Card from './Card';

const CardsGrid = () => {
    const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const results = await getCharacters(query, offset);
      setCharacters(results);
      setLoading(false);
    };

    fetchCharacters();
  }, [query, offset]);
  
  return (
    <div className="container mx-auto p-4">
    <SearchBar query={setQuery} />
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((character: any) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    )}
  </div>
);
};

export default CardsGrid