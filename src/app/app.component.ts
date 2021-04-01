import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  
  constructor() {
  }
 
 
}