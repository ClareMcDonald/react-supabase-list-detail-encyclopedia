import React from 'react';
import { useEffect, useState } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [poke, setPoke] = useState({});
  return (
    <div>PokemonDetail</div>
  );
}
