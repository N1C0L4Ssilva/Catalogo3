import { TestBed } from '@angular/core/testing';

import { GerenciamentoFuncionariosService } from './gerenciamento-funcionarios.service';

describe('GerenciamentoFuncionariosService', () => {
  let service: GerenciamentoFuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciamentoFuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
