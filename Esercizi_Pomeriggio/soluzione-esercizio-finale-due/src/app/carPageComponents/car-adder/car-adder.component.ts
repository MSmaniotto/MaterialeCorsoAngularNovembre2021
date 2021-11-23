import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-adder',
  templateUrl: './car-adder.component.html',
  styleUrls: ['./car-adder.component.css']
})
export class CarAdderComponent{

  public myCar: Car={
    factory:"",
    name:"",
    power:0,
    type:""
  };

  myForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.myForm = fb.group({
      factory: ["", [Validators.required, Validators.maxLength(20)]],
      name:["", [Validators.required, Validators.maxLength(20)]],
      power:["", [Validators.required, Validators.pattern(/^([0-9]{1,4})$/)]],
      type:["", [Validators.required, Validators.maxLength(20)]]
    })
  }

  public sendData(){
    this.myCar=this.myForm.value;
    console.log(JSON.stringify(this.myCar));
  }

}
