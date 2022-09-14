import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrResetComponent } from './str-reset.component';

describe('StrResetComponent', () => {
  let component: StrResetComponent;
  let fixture: ComponentFixture<StrResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
