import React, { useState, useEffect } from 'react';
import { getPokemon } from './fetch-utils';
import PokemonList from './PokemonList';

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetchPokes() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokes = await getPokemon(from, to);

      setPokemon(pokes);
    }

    fetchPokes();

  }, [page]);
    
  return (
    <>
      <button>Previous</button>
      <button>Next</button>
      <PokemonList pokemon={pokemon}/>
    </>
  );
}
