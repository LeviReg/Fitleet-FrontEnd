import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDiaryPage } from './food-diary.page';

describe('FoodDiaryPage', () => {
  let component: FoodDiaryPage;
  let fixture: ComponentFixture<FoodDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
