import { TestBed } from '@angular/core/testing';

import { PokemonZAService } from './pokemon-za.service';

describe('PokemonZAService', () => {
  let service: PokemonZAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonZAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
