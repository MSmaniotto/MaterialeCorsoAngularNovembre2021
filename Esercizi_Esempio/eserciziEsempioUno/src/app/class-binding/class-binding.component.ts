import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  constructor() { }
  public successClass:string="text-success";
  public hasError:boolean=false;
  public isSpecial:boolean=true;
  public messageClasses={
    "text-success": this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

}
