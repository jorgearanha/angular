import { TestBed } from '@angular/core/testing';

import { PesquisaPaisesService } from './pesquisa-paises.service';

describe('PesquisaPaisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesquisaPaisesService = TestBed.get(PesquisaPaisesService);
    expect(service).toBeTruthy();
  });
});
