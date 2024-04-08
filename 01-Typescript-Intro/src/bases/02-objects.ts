export const pokemonIds = [1, 20, 30, 34, 66];

console.log(pokemonIds);

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
export const bulbasur: Pokemon = {
  id: 1,
  name: "Bulbasur",
};

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur);
console.log(pokemons);
