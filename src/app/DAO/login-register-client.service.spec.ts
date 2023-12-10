import { TestBed } from '@angular/core/testing';

import { LoginRegisterClientService } from './login-register-client.service';

describe('LoginRegisterClientService', () => {
  let service: LoginRegisterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegisterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
