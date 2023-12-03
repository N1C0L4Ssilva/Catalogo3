import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATALOGOSEARCHComponent } from './catalogo-search.component';

describe('CATALOGOSEARCHComponent', () => {
  let component: CATALOGOSEARCHComponent;
  let fixture: ComponentFixture<CATALOGOSEARCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CATALOGOSEARCHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CATALOGOSEARCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
