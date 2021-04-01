import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Bharath",'E123',"atom.vs"]
  info2: string[] = ["Sairam",'E345',"atom.vs"]
  info3: string[] = ["Tejaswi",'E678',"atom.vs"]

  getInfo1():string[]{
    return this.info1
  }
  
  getInfo2():string[]{
    return this.info2
  }
  
  getInfo3():string[]{
    return this.info3
  }
  constructor() { }
}
