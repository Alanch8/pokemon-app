import { pokemonTypeAttributesWeak } from "./pokemonTypeAttributesWeak.interface";

export interface PokemonV2Type {
  name: string;
  pokemonV2TypeefficaciesByTargetTypeId: pokemonTypeAttributesWeak[];
}
