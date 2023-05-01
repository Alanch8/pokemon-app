import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { CarrouselArray } from "../interfaces/carrousel/carrouselArray.interface";

@Injectable({
  providedIn: "root",
})
export class PokemonCarouselService extends Query<CarrouselArray> {
  override document = gql`
    query pokemonList($limit: Int!, $offset: Int!) {
      pokemonsCarrousel: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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
