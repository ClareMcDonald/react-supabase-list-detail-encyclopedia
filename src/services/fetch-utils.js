import { client, checkError } from './client';

export async function getPokemon(from = 0, to = 20) {
  const response = await client
    .from('Pokemon')
    .select()
    .from(from, to);
    
  return checkError(response);

}