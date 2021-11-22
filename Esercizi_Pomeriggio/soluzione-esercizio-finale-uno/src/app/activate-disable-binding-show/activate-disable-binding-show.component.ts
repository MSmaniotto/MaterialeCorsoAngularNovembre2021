import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate-disable-binding-show',
  templateUrl: './activate-disable-binding-show.component.html',
  styleUrls: ['./activate-disable-binding-show.component.css']
})
export class ActivateDisableBindingShowComponent {

  constructor() { }
  public hideNow:boolean=true;
  public text:string="";
  // public activeClass:string="text-success";
  // public changeClass(str:string):void{
  //   this.activeClass=str;
  // }
  public changeVisualization():void{
    this.hideNow=!this.hideNow;
  }


}
