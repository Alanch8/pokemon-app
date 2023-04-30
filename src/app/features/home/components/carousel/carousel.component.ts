import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IPokemons } from "src/app/shared/interfaces/schema-carousel";
import { PokemonCarouselService } from "src/app/shared/services/pokemon-carousel.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  pokemonLit$!: Observable<IPokemons[]>;

  allPokemons: IPokemons[] = [];

  active = 2;

  constructor(private pokemonCarousel: PokemonCarouselService) {}

  ngOnInit(): void {

    const offset = Math.floor(Math.random() * 1008 - 10);

    this.pokemonLit$ = this.pokemonCarousel
    .watch({ limit: 10, offset })
    .valueChanges
    .pipe(map((result) => result.data.pokemons));

    this.pokemonLit$.subscribe((data) => {
      this.allPokemons = data;
    });
  }

  prev(){
    const last = this.allPokemons[this.allPokemons.length - 1];
    this.allPokemons = this.allPokemons.slice(0, this.allPokemons.length -1);
    this.allPokemons = [last, ...this.allPokemons];
  }

  next(){
    const first = this.allPokemons[0];
    this.allPokemons = this.allPokemons.slice(1,this.allPokemons.length);
    this.allPokemons = [...this.allPokemons, first];
  }
}