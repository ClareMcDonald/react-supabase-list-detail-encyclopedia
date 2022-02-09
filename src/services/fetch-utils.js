import { client, checkError } from './client.js';

export async function getPokemon(from = 0, to = 20) {
  const response = await client
    .from('pokemon_two')
    .select()
    .range(from, to);
  console.log(response);
  return checkError(response);

}