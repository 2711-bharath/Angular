import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  flag:boolean=false;
  login:any
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  user = {
    fname:"",
    lname:"",
    pass:"",
    emailId:"",
    
  }
  submit(frm:any){
    console.log("Form Submitted");
    console.log(frm);
    this.login = frm;
    this.firstname = frm.value.firstname;
    this.user.fname = frm.value.firstname;
    this.lastname = frm.value.lastname;
    this.user.lname = frm.value.lastname;
    this.email = frm.value.email;
    this.user.emailId = frm.value.email;
    this.password = frm.value.password;
    this.user.pass = frm.value.password;
    this.flag = true;
  }

}
