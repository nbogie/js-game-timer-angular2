/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TimerSetComponent } from './timer-set.component';

describe('Component: TimerSet', () => {
  it('should create an instance', () => {
    let component = new TimerSetComponent();
    expect(component).toBeTruthy();
  });
});
