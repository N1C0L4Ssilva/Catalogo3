import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARRINHOCOMPRASCLIENTEComponent } from './carrinho-compras-cliente.component';

describe('CARRINHOCOMPRASCLIENTEComponent', () => {
  let component: CARRINHOCOMPRASCLIENTEComponent;
  let fixture: ComponentFixture<CARRINHOCOMPRASCLIENTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CARRINHOCOMPRASCLIENTEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CARRINHOCOMPRASCLIENTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
