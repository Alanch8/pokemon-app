export interface Pokemon {
  id: number;
  name: string;
  is_legendary?: boolean;
  capture_rate?: number;
  gender_rate?: number;
  generation_id: number;
  evolves_from_species_id?: number;
  pokemon_v2_evolutionchain?: {
    pokemon_v2_pokemonspecies: Pokemon[];
  };
  pokemon_v2_pokemonspeciesflavortexts: {
    flavor_text: string;
  }[];
}
