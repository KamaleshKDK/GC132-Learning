import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrInterpolationComponent } from './str-interpolation.component';

describe('StrInterpolationComponent', () => {
  let component: StrInterpolationComponent;
  let fixture: ComponentFixture<StrInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrInterpolationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
