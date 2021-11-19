import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  constructor() { }

  public greetings:string="";
  public onClick():void{
    this.greetings="pleased to meet you!"
  }

}
