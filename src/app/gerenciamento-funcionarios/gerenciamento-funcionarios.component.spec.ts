import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GERENCIAMENTOFUNCIONARIOSComponent } from './gerenciamento-funcionarios.component';

describe('GERENCIAMENTOFUNCIONARIOSComponent', () => {
  let component: GERENCIAMENTOFUNCIONARIOSComponent;
  let fixture: ComponentFixture<GERENCIAMENTOFUNCIONARIOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GERENCIAMENTOFUNCIONARIOSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GERENCIAMENTOFUNCIONARIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
