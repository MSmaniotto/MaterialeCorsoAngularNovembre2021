import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-attribute-binding',
  templateUrl: './property-attribute-binding.component.html',
  styleUrls: ['./property-attribute-binding.component.css']
})
export class PropertyAttributeBindingComponent{

  constructor() { }
  public isDeactivated:boolean=false;
  public inputName:string="testInput"

  click(){
    this.isDeactivated=!this.isDeactivated;
    this.inputName="stringChanged";
  }
}
