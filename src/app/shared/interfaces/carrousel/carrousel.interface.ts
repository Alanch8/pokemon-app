import { Ability } from "./ability.interface";
import { Type } from "./type.interface";

export interface CarrouselPokemon {
  id: number;
  name: string;
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: Ability;
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: Type;
  }[];
}
