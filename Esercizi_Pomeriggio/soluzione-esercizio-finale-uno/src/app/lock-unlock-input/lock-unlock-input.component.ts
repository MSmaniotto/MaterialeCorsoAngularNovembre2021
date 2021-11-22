import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-unlock-input',
  templateUrl: './lock-unlock-input.component.html',
  styleUrls: ['./lock-unlock-input.component.css']
})
export class LockUnlockInputComponent{

  constructor() { }

  public activation:boolean=false;
  public text:string="";
  // public activeClass:string="text-success";
  // public changeClass(str:string):void{
  //   this.activeClass=str;
  // }
  public changeActivation():void{
    this.activation=!this.activation;
  }

}
