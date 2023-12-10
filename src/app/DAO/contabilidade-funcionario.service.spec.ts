import { TestBed } from '@angular/core/testing';

import { ContabilidadeFuncionarioService } from './contabilidade-funcionario.service';

describe('ContabilidadeFuncionarioService', () => {
  let service: ContabilidadeFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContabilidadeFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
