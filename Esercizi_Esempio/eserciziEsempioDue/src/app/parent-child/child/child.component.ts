import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h2>{{"Hello "+ name}}</h2>
  <button (click)="fireEvent()">Send</button>
  `
})
export class ChildComponent {

  @Input('parentData') public name:string
  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hello there!")
  }

}
