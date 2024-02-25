import { TestBed } from '@angular/core/testing';

import { AngularHoverGradientButtonService } from './angular-hover-gradient-button.service';

describe('AngularHoverGradientButtonService', () => {
  let service: AngularHoverGradientButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularHoverGradientButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
