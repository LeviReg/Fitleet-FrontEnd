import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestTimerPage } from './rest-timer.page';

describe('RestTimerPage', () => {
  let component: RestTimerPage;
  let fixture: ComponentFixture<RestTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
