import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  
  getName(name){
    alert("Hello "+name)
  }
  myEvent(evt){
    alert(evt)
  }
  name:string;
  myEvent1(box){
    this.name = box.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
