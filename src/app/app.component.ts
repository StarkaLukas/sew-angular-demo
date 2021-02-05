import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  mynumber = 41;
  todos = [
    'Shopping',
    'Homework',
    'Listen to music'
  ];

  constructor() {
  }

  public onClicked(): void {
    this.title += '!!';
  }
}
