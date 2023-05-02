import { TestBed } from "@angular/core/testing";
import { ApolloTestingModule, ApolloTestingController } from "apollo-angular/testing";
import { GetPokedex } from "./pokedex.service";

describe("GetPokedex", () => {
  let service: GetPokedex;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [GetPokedex],
    });

    service = TestBed.inject(GetPokedex);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it("should fetch the list of Pokemon from the Pokedex", () => {
    const responseMock = {
          pokemon: [
            {
              name: "Bulbasaur",
              id: 1,
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    name: "Grass",
                  },
                },
                {
                  pokemon_v2_type: {
                    name: "Poison",
                  },
                },
              ],
            },
            // ... add more Pokemon objects as needed
          ],
        };

    service.watch().valueChanges.subscribe(({ data }) => {
      expect(data).toEqual(responseMock.data);
    });

    const op = controller.expectOne(service.document);

    op.flush(responseMock);
  });
});