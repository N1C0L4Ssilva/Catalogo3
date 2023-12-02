import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGINREGISTERCLIENTComponent } from './login-register-client.component';

describe('LOGINREGISTERCLIENTComponent', () => {
  let component: LOGINREGISTERCLIENTComponent;
  let fixture: ComponentFixture<LOGINREGISTERCLIENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LOGINREGISTERCLIENTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LOGINREGISTERCLIENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
