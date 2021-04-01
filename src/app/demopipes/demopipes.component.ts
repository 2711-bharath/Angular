import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {
  power = 5;
  factor = 1;
  toDate: Date = new Date();
  msg: string= 'Welcome to Angular';
  num1:number = 9876.54321;
  Fahrenheit:number;
  celcius:number;
  obj = {
    c: 123,
    b: 456,
    a: 789,
  };
  mapObj = new Map([
    ['c', 123],
    ['b', 446],
    ['a', 789],
 ]);
  constructor() { }

  ngOnInit(): void {
  }

}
