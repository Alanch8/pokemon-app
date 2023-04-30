import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { IPokemons } from "../interfaces/schema-carousel";

interface PokemonsListResponse {
  pokemons: IPokemons[];
}

@Injectable({
  providedIn: "root",
})
export class PokemonCarouselService extends Query<PokemonsListResponse> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
        id
        name
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  `;
}

// query pokemonList($limit: Int!, $offset: Int!) {
//   species: pokemon_v2_pokemonspecies(
//     order_by: { id: asc }
//     limit: $limit
//     offset: $offset
//   ) {
//     name
//     id
//   }
// }
