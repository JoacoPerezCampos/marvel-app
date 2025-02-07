import React from 'react'

const Card = ({ character }: { character: any }) => {
    return (
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      </div>
    );
  };
  
  export default Card;