import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSelectPage } from './work-select.page';

describe('WorkSelectPage', () => {
  let component: WorkSelectPage;
  let fixture: ComponentFixture<WorkSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
