import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should will be true if username is yangxu', inject([AuthService], (service: AuthService) => {
    const result = service.loginWithCredentials('yangxu', 'pwd');
    expect(result).toBeTruthy();
  }));

  it('should will be false if otherusers', inject([AuthService], (service: AuthService) => {
    const result = service.loginWithCredentials('luyao', 'pwd');
    expect(result).toBeFalsy();
  }));

});
