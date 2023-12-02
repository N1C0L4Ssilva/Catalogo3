import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTABILIDADEFUNCIONARIOComponent } from './contabilidade-funcionario.component';

describe('CONTABILIDADEFUNCIONARIOComponent', () => {
  let component: CONTABILIDADEFUNCIONARIOComponent;
  let fixture: ComponentFixture<CONTABILIDADEFUNCIONARIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CONTABILIDADEFUNCIONARIOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CONTABILIDADEFUNCIONARIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
