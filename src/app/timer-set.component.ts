import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayerTimerComponent } from './player-timer.component';

@Component({
  moduleId: module.id,
  selector: 'app-timer-set',
  directives: [PlayerTimerComponent],
  templateUrl: 'timer-set.component.html',
  styleUrls: ['timer-set.component.css']
})

export class TimerSetComponent implements OnInit {

  players: Player[] = 'Errol Jon Pankaj Neill'
      .split(' ')
      .map(n => this.makePlayer(n));

  constructor() {}

  ngOnInit() {
  }

  makePlayer(name): Player {
      return {
        name: name,
        color: 'red'
      }
  }

  deletePlayer(player) {
    let ix = this.players.indexOf(player);
    if (ix >= 0){
      this.players.splice(ix, 1);
    }
  }
  startPlayer(component) {
    console.log("a timer was started: " + component);
  }

  addPlayer() {
    this.players.push(this.makePlayer('Steve'));
  }
}
