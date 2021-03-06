import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  checkoutForm : FormGroup
  /*
  constructor(private formBuilder:FormBuilder) { 
    this.checkoutForm = formBuilder.group({ // Building the form using formBuilder
      'email': new FormControl(), // in the formBuilder we are creating a group of form elements
      'quantity': new FormControl(), // thses should be exactly same as your form
      'terms': new FormControl(), //  we can also have it dynamic   
    });
  }
  */
  myfrm:any

  submitted = false;
  constructor(private formBuilder:FormBuilder) { 
    this.checkoutForm = formBuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'email': ['',Validators.required], 
      'quantity': ['',Validators.required], 
      'terms': ['',Validators.requiredTrue],    
    });
  }
  submitVal:boolean=false;
  showData(){
    console.log(this.checkoutForm.value)
    this.myfrm = this.checkoutForm.value;
    this.checkoutForm.reset()
    this.submitVal = true

  }
  ngOnInit(): void {
  }

}
