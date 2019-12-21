import { TestBed } from '@angular/core/testing';

import { TabuleiroService } from './tabuleiro.service';

describe('TabuleiroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabuleiroService = TestBed.get(TabuleiroService);
    expect(service).toBeTruthy();
  });
});
