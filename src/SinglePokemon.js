import React from 'react';
import { Link } from 'react-router-dom';

export default function SinglePokemon({ poke }) {
  return (
    <Link to={`/pokemon/${poke.id}`} className="poke">
      {poke.name}
    </Link>
  );
}
