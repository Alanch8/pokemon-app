import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Pokemon } from "src/app/shared/interfaces/pokemon/pokemon.interface";
import { GetPokemon } from "src/app/shared/services/pokemon.service";
import { Image } from "src/app/core/constants/images";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  public myPokemonform!: FormGroup;
  pokemon$!: Observable<Pokemon>;
  api_image = Image.API_IMAGES;
  api_format_image = Image.API_FORMAT_IMAGES;

  constructor(private route: ActivatedRoute, private getPokemon: GetPokemon) {}

  ngOnInit(): void {
    this.showPokemonData();
    this.myPokemonform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      id: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
      nameAbilities: new FormControl("", [Validators.required]),
      abilitiesDescription: new FormControl("", [Validators.required]),
      types: new FormControl("", [Validators.required]),
      weakness: new FormControl("", [Validators.required]),
      nameStat: new FormControl("", [Validators.required]),
      numberStat: new FormControl("", [Validators.required]),
      evolution: new FormControl("", [Validators.required]),
      evolutionName: new FormControl("", [Validators.required]),
      // evolutionType: new FormControl("", [Validators.required]),
    });
  }

  showPokemonData() {
    return this.route.params.subscribe((routeParams) => {
      this.pokemon$ = this.getPokemon
        .watch({ id: routeParams["id"] })
        .valueChanges.pipe(
          tap((response) => console.log(response)),
          map((result) => result.data.pokemon)
        );
    });
  }
}
