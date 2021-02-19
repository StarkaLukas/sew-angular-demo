import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {

  @Input() public value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
