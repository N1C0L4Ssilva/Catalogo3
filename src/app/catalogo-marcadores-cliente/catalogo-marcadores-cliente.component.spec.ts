import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATALOGOMARCADORESCLIENTEComponent } from './catalogo-marcadores-cliente.component';

describe('CATALOGOMARCADORESCLIENTEComponent', () => {
  let component: CATALOGOMARCADORESCLIENTEComponent;
  let fixture: ComponentFixture<CATALOGOMARCADORESCLIENTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CATALOGOMARCADORESCLIENTEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CATALOGOMARCADORESCLIENTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
