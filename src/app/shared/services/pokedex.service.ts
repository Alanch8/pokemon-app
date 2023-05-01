import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { PokedexArray } from "../interfaces/pokedex/pokedexArray.interface";

@Injectable({
  providedIn: "root",
})
export class GetPokedex extends Query<PokedexArray> {
  override document = gql`
    query pokemonList(
      $limit: Int!
      $offset: Int!
      $order_by: [pokemon_v2_pokemon_order_by!]
    ) {
      pokedex: pokemon_v2_pokemon(
        order_by: $order_by
        limit: $limit
        offset: $offset
        where: { id: { _gte: 1, _lte: 1008 } }
      ) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  `;
}
