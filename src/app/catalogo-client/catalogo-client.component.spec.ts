import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATALOGOCLIENTComponent } from './catalogo-client.component';

describe('CATALOGOCLIENTComponent', () => {
  let component: CATALOGOCLIENTComponent;
  let fixture: ComponentFixture<CATALOGOCLIENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CATALOGOCLIENTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CATALOGOCLIENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
