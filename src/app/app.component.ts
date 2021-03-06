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

  public addItem(): void {
    this.todos.push('something');
  }

  public removeItem(item: string): void {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  onReset(): void {
    console.log('Reset clicked!');
    this.mynumber = 0;
  }
}
