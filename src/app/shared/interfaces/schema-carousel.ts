interface Ability {
  name: string;
}

interface Type {
  name: string;
}

export interface IPokemons {
  id: number;
  name: string;
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: Ability;
  }[];
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: Type;
  }[];
}