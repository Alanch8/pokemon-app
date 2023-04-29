import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Species } from "../interfaces/schema";

interface SpeciesListResponse {
  species: Species[];
}

@Injectable({
  providedIn: "root",
})
export class PokemonAZService extends Query<SpeciesListResponse> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      species: pokemon_v2_pokemonspecies(
        order_by: { name: asc }
        limit: $limit
        offset: $offset
      ) {
        name
        id
        generation_id
      }
    }
  `;
}