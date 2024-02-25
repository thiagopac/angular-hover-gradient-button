import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHoverGradientButtonComponent } from './angular-hover-gradient-button.component';

describe('AngularHoverGradientButtonComponent', () => {
  let component: AngularHoverGradientButtonComponent;
  let fixture: ComponentFixture<AngularHoverGradientButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularHoverGradientButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularHoverGradientButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
