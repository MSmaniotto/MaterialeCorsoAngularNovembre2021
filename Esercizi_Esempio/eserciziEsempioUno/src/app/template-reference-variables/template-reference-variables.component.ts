import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent {

  constructor() { }

  public message:String="";
  public addMessage(message:String){
    this.message=message;
  }


}
