import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATALOGOFUNCIONARIOComponent } from './catalogo-funcionario.component';

describe('CATALOGOFUNCIONARIOComponent', () => {
  let component: CATALOGOFUNCIONARIOComponent;
  let fixture: ComponentFixture<CATALOGOFUNCIONARIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CATALOGOFUNCIONARIOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CATALOGOFUNCIONARIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
