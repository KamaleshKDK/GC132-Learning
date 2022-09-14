import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnimeFormComponent } from './new-anime-form.component';

describe('NewAnimeFormComponent', () => {
  let component: NewAnimeFormComponent;
  let fixture: ComponentFixture<NewAnimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAnimeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAnimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
