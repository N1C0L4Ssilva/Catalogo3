import { TestBed } from '@angular/core/testing';

import { GerarCodigoRandonService } from './gerar-codigo-randon.service';

describe('GerarCodigoRandonService', () => {
  let service: GerarCodigoRandonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerarCodigoRandonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
