import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Species } from "../interfaces/schema";

interface SpeciesListResponse {
  species: Species[];
}

@Injectable({
  providedIn: "root",
})
export class PokemonZAService extends Query<SpeciesListResponse> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      species: pokemon_v2_pokemonspecies(
        order_by: { name: desc }
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
