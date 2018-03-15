/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoautoselectComponent } from './noautoselect.component';

describe('NoautoselectComponent', () => {
  let component: NoautoselectComponent;
  let fixture: ComponentFixture<NoautoselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoautoselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoautoselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
