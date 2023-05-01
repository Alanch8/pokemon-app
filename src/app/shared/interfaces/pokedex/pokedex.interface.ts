import { PokedexType } from "./pokedexType.interface";

export interface Pokedex {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: PokedexType;
  }[];
}
