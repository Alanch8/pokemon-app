import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Carrousel } from "src/app/core/constants/carrousel";
import { Image } from "src/app/core/constants/images";
import { PokemonCarouselService } from "src/app/shared/services/carousel.service";
import { CarrouselPokemon } from "src/app/shared/interfaces/carrousel/carrousel.interface";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  api_images = Image.API_IMAGES;
  api_format_images = Image.API_FORMAT_IMAGES;
  active = Carrousel.ACTIVE_CARROUSEL;
  pokemonCarrousel$!: Observable<CarrouselPokemon[]>;
  allPokemons: CarrouselPokemon[] = [];
  firstOne = this.allPokemons[0];
  lastOne = this.allPokemons[this.allPokemons.length - 1];

  constructor(private pokemonCarousel: PokemonCarouselService) {}

  ngOnInit(): void {
    const offset = Carrousel.OFFSET_RANDOM;
    this.pokemonCarrousel$ = this.pokemonCarousel
      .watch({ limit: 10, offset })
      .valueChanges.pipe(map((result) => result.data.pokemonsCarrousel));

    this.pokemonCarrousel$.subscribe((data) => {
      this.allPokemons = data;
    });
  }

  prev() {
    this.allPokemons = this.allPokemons.slice(0, this.allPokemons.length - 1);
    this.allPokemons = [this.lastOne, ...this.allPokemons];
  }

  next() {
    this.allPokemons = this.allPokemons.slice(1, this.allPokemons.length);
    this.allPokemons = [...this.allPokemons, this.firstOne];
  }
}
