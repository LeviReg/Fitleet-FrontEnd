import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousDiariesPage } from './previous-diaries.page';

describe('PreviousDiariesPage', () => {
  let component: PreviousDiariesPage;
  let fixture: ComponentFixture<PreviousDiariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousDiariesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousDiariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
