import { TestBed } from '@angular/core/testing';

import { CatalogoSearchService } from './catalogo-search.service';

describe('CatalogoSearchService', () => {
  let service: CatalogoSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
