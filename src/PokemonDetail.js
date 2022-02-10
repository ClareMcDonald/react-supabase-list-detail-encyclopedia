import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail({ poke }) {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetchPoke() {
      const matchPoke = await getSinglePokemon(params.id);

      setPokemon(matchPoke);
    }
    
    fetchPoke();

  }, [params.id]);

  function handlePokemonClick() {
    window.location.replace('/pokemon/${params.id}');
  }
  
  return (
    <>
      <Link to="/">Home</Link>

      <div>PokemonDetail</div>
    </>
  );
}
