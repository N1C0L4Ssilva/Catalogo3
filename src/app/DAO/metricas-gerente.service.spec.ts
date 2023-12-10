import { TestBed } from '@angular/core/testing';

import { MetricasGerenteService } from './metricas-gerente.service';

describe('MetricasGerenteService', () => {
  let service: MetricasGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetricasGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
