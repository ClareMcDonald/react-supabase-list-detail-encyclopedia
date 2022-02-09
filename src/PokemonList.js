import React from 'react';
import SinglePokemon from './SinglePokemon.js';

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon">
      {pokemon.map((Poke, i) => <SinglePokemon key={`${Poke.name}-${i}`} poke={Poke} />)}
    </div>
  );
}
