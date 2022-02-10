import React, { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils.js';
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
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <PokemonList pokemon={pokemon}/>
    </>
  );
}
