import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-adder-template',
  templateUrl: './car-adder-template.component.html',
  styleUrls: ['./car-adder-template.component.css']
})
export class CarAdderTemplateComponent {

  constructor() { }

  public formModel:Car=new Car();

  public sendData(){
    console.log(JSON.stringify(this.formModel));
  }

}
