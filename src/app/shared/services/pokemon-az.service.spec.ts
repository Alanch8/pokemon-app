import { TestBed } from '@angular/core/testing';

import { PokemonAZService } from './pokemon-az.service';

describe('PokemonAZService', () => {
  let service: PokemonAZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
