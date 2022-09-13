import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Switches {
  a: boolean,
  b: boolean,
  c: boolean,
  d: boolean,
  e: boolean,
  f: boolean,
  g: boolean,
  h: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SwitchesService {

  private _switches = new BehaviorSubject<Switches>({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false
  });
  readonly switches$ = this._switches.asObservable();
  private switches = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
  };
  private _target = new BehaviorSubject<number>(0);
  readonly target$ = this._target.asObservable();
  private target = 0;
  

  constructor() {}

  toggle(switchToToggle: string) {
    type ObjectKey = keyof typeof this.switches;
    const switchKey = switchToToggle as ObjectKey;
    if (!['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].includes(switchToToggle)) {
      console.log('ERROR: attempted to toggle invalid switch:' + switchToToggle);
      return null;
    }
    this.switches[switchKey] = !this.switches[switchKey];
    return true;
  }

  total() {
    let sum = 0;
    if (this.switches.a) {
      sum += 1
    }
    if (this.switches.b) {
      sum += 2
    }
    if (this.switches.c) {
      sum += 4
    }
    if (this.switches.d) {
      sum += 8
    }
    if (this.switches.e) {
      sum += 16
    }
    if (this.switches.f) {
      sum += 32
    }
    if (this.switches.g) {
      sum += 64
    }
    if (this.switches.h) {
      sum += 128
    }
    return sum;
  }

  isEqual(value: number) {
    return this.total() === value;
  }

  isSolved() {
    return this.isEqual(this.target);
  }

  setTarget(value: number) {
    this.target = value;
  }

  setRandom() {
    let targetValue = Math.floor(Math.random() * (255 - 1) + 1);
    this.setTarget(targetValue);
  }
}
