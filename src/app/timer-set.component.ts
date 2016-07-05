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

  showToDos: boolean = false;

  players: Player[] = 'Errol Jon Pankaj Neill'
      .split(' ')
      .map(n => this.makePlayer(n));

  todos: string[] = [
    "Bear in mind: primary users: phones and tablets.",
    "Require confirmation of a time reset - it's uncommon and dangerous."];

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
    console.log("deletePlayer called for " + player);
    let ix = this.players.indexOf(player);
    if (ix >= 0){
      console.log("found player so deleting it at "+ix);
      this.players.splice(ix, 1);
    }
  }
  startPlayer(component) {
    console.log("a timer was started: " + component);
  }

  toggleShowToDos() {
    this.showToDos = !this.showToDos;
  }

  addPlayer() {
    this.players.push(this.makePlayer('Steve'));
  }
}
