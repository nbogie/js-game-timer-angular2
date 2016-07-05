import { Component } from '@angular/core';

import { TimerSetComponent } from './timer-set.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [TimerSetComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Game Timer - Angular 2';
}
