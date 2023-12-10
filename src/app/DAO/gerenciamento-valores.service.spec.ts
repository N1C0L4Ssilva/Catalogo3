import { TestBed } from '@angular/core/testing';

import { GerenciamentoValoresService } from './gerenciamento-valores.service';

describe('GerenciamentoValoresService', () => {
  let service: GerenciamentoValoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciamentoValoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
