import { PokemonSpeciesEvolution } from "./pokemonSpeciesEvolution.interface";
import { PokemonSpeciesDescription } from "./pokemonSpeciesDescription.interface";

export interface PokemonSpecies {
  pokemon_v2_evolutionchain: PokemonSpeciesEvolution;
  pokemon_v2_pokemonspeciesflavortexts: PokemonSpeciesDescription[];
}
