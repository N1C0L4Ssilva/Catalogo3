import { ComponentFixture, TestBed } from '@angular/core/testing';

import { METRICASGERENTEComponent } from './metricas-gerente.component';

describe('METRICASGERENTEComponent', () => {
  let component: METRICASGERENTEComponent;
  let fixture: ComponentFixture<METRICASGERENTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [METRICASGERENTEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(METRICASGERENTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
