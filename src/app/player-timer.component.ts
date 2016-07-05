import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Player } from './player';
import { DurationClockPipe } from './duration-clock.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-player-timer',
  pipes: [DurationClockPipe],
  templateUrl: 'player-timer.component.html',
  styleUrls: ['player-timer.component.css']
})
export class PlayerTimerComponent implements OnInit {
  @Input() player: Player;

  @Output() delete = new EventEmitter<Player>();
  @Output() start = new EventEmitter<number>(); //emits player id

  elapsedTime: number = 0;
  elapsedTimeTotal: number = 0;


  constructor() {}

  //TODO: unsubscribe on destroy?
  //TODO: consider delayed timer updates,
  //  and browser in background / device sleeping.
  //Better to calculate the time delta since we last unpaused,
  //  and add that to our elapsedBeforeLastPause time.

  ngOnInit(){
    let timer = Observable.timer(0,1000); //start after 0 sec, tick every second.
    timer.subscribe(t => {
      if (this.player.isRunning) {
        this.elapsedTime += 1;
        this.elapsedTimeTotal += 1;
      }
    }
    );
  }


  deleteSelf() {
    this.delete.emit(this.player);
  }

  resetTimer() {
    this.elapsedTime = 0;
    this.elapsedTimeTotal = 0;
  }

  toggleTimer() {
    if (!this.player.isRunning) {
      this.elapsedTime = 0;
      this.start.emit(this.player.id);
    }
    this.player.isRunning = !this.player.isRunning;
  }


}
