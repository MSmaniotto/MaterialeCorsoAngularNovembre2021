import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
    <app-child  (childEvent)="message=$event"
                          [parentData]="name">
    </app-child>
    <h1>{{message}}</h1>
  `
})
export class ParentComponent {

  public name:String= "Somebody";
  public message:String="";

}
