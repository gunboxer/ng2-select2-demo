/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {SimpleAjaxSelectComponent, SimpleAjaxSelectComponent} from './simpleajaxselect.component';

describe('SimpleAjaxSelectComponent', () => {
  let component: SimpleAjaxSelectComponent;
  let fixture: ComponentFixture<SimpleAjaxSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAjaxSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAjaxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
