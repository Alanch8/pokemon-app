import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { PokemonArray } from "../interfaces/pokemon/pokemonArray.interface";

@Injectable({
  providedIn: "root",
})
export class GetPokemon extends Query<PokemonArray> {
  override document = gql`
    query pokemon($id: Int!) {
      pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
        id
        name
        height
        weight
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
            pokemonV2TypeefficaciesByTargetTypeId(
              where: { damage_factor: { _eq: 200 } }
            ) {
              damage_factor
              pokemon_v2_type {
                name
              }
            }
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonabilities(limit: 1) {
          pokemon_v2_ability {
            name
            pokemon_v2_abilityeffecttexts {
              short_effect
            }
          }
        }
        pokemon_v2_pokemonspecy {
          pokemon_v2_evolutionchain {
            pokemon_v2_pokemonspecies(order_by: { id: asc }) {
              id
              name
              pokemon_v2_pokemons {
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                    name
                  }
                }
              }
            }
          }
          pokemon_v2_pokemonspeciesflavortexts(
            where: { language_id: { _eq: 9 } }
            order_by: { version_id: desc }
            limit: 1
          ) {
            flavor_text
          }
        }
      }
    }
  `;
}
