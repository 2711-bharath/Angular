import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["Bharath",'E123',"2711bharath@gmail.com"]
  info2: string[] = ["Sairam",'E345',"sairamgundala@gmail.com"]
  info3: string[] = ["Tejaswi",'E678',"tejashwi.koya@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }
  
  getInfo2():string[]{
    return this.info2
  }
  
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info){
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1;
  }
  constructor() { }
}
