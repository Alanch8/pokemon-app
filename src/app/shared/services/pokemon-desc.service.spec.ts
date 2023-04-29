import { TestBed } from '@angular/core/testing';

import { PokemonDescService } from './pokemon-desc.service';

describe('PokemonDescService', () => {
  let service: PokemonDescService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDescService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
