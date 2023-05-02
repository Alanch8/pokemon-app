import { PokemonEvolutionType } from "./pokemonSpeciesEvolutionType.interface";

export interface pokemonSpeciesEvolutionResult {
  id: number;
  name: string;
  pokemon_v2_pokemons: PokemonEvolutionType[];
}
