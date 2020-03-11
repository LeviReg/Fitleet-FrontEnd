import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousDiaryPage } from './previous-diary.page';

describe('PreviousDiaryPage', () => {
  let component: PreviousDiaryPage;
  let fixture: ComponentFixture<PreviousDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousDiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
