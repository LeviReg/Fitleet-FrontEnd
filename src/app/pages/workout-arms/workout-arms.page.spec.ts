import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutArmsPage } from './workout-arms.page';

describe('WorkoutArmsPage', () => {
  let component: WorkoutArmsPage;
  let fixture: ComponentFixture<WorkoutArmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutArmsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutArmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
