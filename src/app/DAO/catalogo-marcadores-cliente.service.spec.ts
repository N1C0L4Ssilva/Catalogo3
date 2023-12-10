import { TestBed } from '@angular/core/testing';

import { CatalogoMarcadoresClienteService } from './catalogo-marcadores-cliente.service';

describe('CatalogoMarcadoresClienteService', () => {
  let service: CatalogoMarcadoresClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoMarcadoresClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
