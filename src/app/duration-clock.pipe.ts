import { Pipe, PipeTransform } from '@angular/core';
/*
 * Format the seconds as a duration of HH:mm:ss
 *
 * Takes no arguments.
 *
 * Usage:
 *   value | durationClock
 * Example:
 *   {{ 2 |  durationClock}}
 *   formats to: 00:00:02
*/
@Pipe({name: 'durationClock'})
export class DurationClockPipe implements PipeTransform {

  secToTimeString(sec){
    var d = new Date(sec*1000);
    var s = d.getUTCSeconds();
    var m = d.getUTCMinutes();
    var h = d.getUTCHours();
    function pad(n){
      return ((n < 10) ? "0" : "") + n;
    }
    return ""+pad(h) + ":"+pad(m) + ":"+pad(s);
  }

  transform(value: number): string {
    return this.secToTimeString(value);
  }
}