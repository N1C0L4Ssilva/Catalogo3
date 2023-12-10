import { TestBed } from '@angular/core/testing';

import { CarrinhoComprasClienteService } from './carrinho-compras-cliente.service';

describe('CarrinhoComprasClienteService', () => {
  let service: CarrinhoComprasClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoComprasClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
