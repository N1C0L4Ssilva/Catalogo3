import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarcadoresComponent } from './card-marcadores.component';

describe('CardMarcadoresComponent', () => {
  let component: CardMarcadoresComponent;
  let fixture: ComponentFixture<CardMarcadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMarcadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMarcadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
