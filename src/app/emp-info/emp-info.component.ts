import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {RecordsService} from "../records.service"

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  infoReceived1: string[]=[];
  infoReceived2: string[]=[];
  infoReceived3: string[]=[];

  getInfoFromServiceClass1(){
    this.infoReceived1 = this.rservice.getInfo1();
  }
  
  getInfoFromServiceClass2(){
    this.infoReceived2 = this.rservice.getInfo2();
  }
  
  getInfoFromServiceClass3(){
    this.infoReceived3 = this.rservice.getInfo3();
  }
  
  constructor(private rservice:RecordsService) { }


  ngOnInit(): void {}

}
