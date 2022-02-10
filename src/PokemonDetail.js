import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
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
      <div className="pokemon-detail" onClick={handlePokemonClick}>
        <div>Name: {pokemon.pokemon}</div>
        <img src={pokemon.url_image}/>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>HP: {pokemon.hp}</p>
        <p>Speed:{pokemon.speed}</p>
      </div>
    </>
  );
}

