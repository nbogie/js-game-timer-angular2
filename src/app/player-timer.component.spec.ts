/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PlayerTimerComponent } from './player-timer.component';

describe('Component: PlayerTimer', () => {
  it('should create an instance', () => {
    let component = new PlayerTimerComponent();
    expect(component).toBeTruthy();
  });
});
