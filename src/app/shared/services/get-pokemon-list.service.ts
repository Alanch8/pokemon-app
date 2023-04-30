import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Species } from "../interfaces/schema";

interface SpeciesListResponse {
  species: Species[];
}

@Injectable({
  providedIn: "root",
})
export class GetPokemonListService extends Query<SpeciesListResponse> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      species: pokemon_v2_pokemonspecies(
        order_by: { id: asc }
        limit: $limit
        offset: $offset
      ) {
        name
        id
      }
    }
  `;
  //   query pokemonList(
  //     $limit: Int!
  //     $offset: Int!
  //     $order_by: [pokemon_v2_pokemon_order_by!]
  //   ) {
  //     species: pokemon_v2_pokemonspecies(
  //       order_by: $order_by
  //       limit: $limit
  //       offset: $offset
  //     ) {
  //       name
  //       id
  //     }
  //   }
  // `;
}
