import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function SinglePokemon({ poke }) {
  return (
    <Link to={`/pokemon/${poke.id}`} className="poke">
      {poke.pokemon}
      <img src={poke.url_image}/>
    </Link>
  );
}
