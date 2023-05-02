import { PokemonType } from "./pokemonType.interface";
import { PokemonStats } from "./pokemonStats.interface";
import { PokemonAbilities } from "./pokemonAbilities.interface";
import { PokemonSpecies } from "./pokemonSpecies.interface";

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  pokemon_v2_pokemontypes: PokemonType[];
  pokemon_v2_pokemonstats: PokemonStats[];
  pokemon_v2_pokemonabilities: PokemonAbilities[];
  pokemon_v2_pokemonspecy: PokemonSpecies;
}
