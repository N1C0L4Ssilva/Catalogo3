import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GERENCIAMENTOVALORESComponent } from './gerenciamento-valores.component';

describe('GERENCIAMENTOVALORESComponent', () => {
  let component: GERENCIAMENTOVALORESComponent;
  let fixture: ComponentFixture<GERENCIAMENTOVALORESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GERENCIAMENTOVALORESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GERENCIAMENTOVALORESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
