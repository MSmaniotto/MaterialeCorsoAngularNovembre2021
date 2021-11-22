import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent {

  constructor() { }
  public text:string="";
  public activeClass:string="text-classic";
  public changeClass(str:string):void{
    this.activeClass=str;
  }
  public sendData(str:string){
    this.text=str;
  }

}
