import { TestBed } from '@angular/core/testing';

import { CatalogoClientService } from './catalogo-client.service';

describe('CatalogoClientService', () => {
  let service: CatalogoClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
