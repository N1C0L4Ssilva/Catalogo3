import { TestBed } from '@angular/core/testing';

import { CatalogoFuncionarioService } from './catalogo-funcionario.service';

describe('CatalogoFuncionarioService', () => {
  let service: CatalogoFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
