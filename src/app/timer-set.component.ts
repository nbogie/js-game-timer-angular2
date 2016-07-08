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

  nextId: number = 0;
  threshold: number = 5;

  players: Player[] = 'Daniel Dubois Dmitri Dinah'
      .split(' ')
      .map(n => this.makePlayer(n));

  ngOnInit() {
  }

  makePlayer(name): Player {
      return {
        id: this.nextId++,
        name: name,
        isRunning: false,
        color: 'red'
      }
  }
  foo() {
    console.log(this.threshold); 

  }
  deletePlayer(player) {
    let ix = this.players.indexOf(player);
    if (ix >= 0){
      this.players.splice(ix, 1);
    }
  }
  
  playerStarted(playerId) {
    this.players.filter(p => p.id !== playerId).forEach(p => p.isRunning = false);
  }

  addPlayer() {
    this.players.push(this.makePlayer('Steve'));
  }
}
