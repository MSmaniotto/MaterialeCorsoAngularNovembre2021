import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolazione',
  templateUrl: './interpolazione.component.html',
  styleUrls: ['./interpolazione.component.css']
})
export class InterpolazioneComponent {

  constructor() { }

  public test1:string="Riuscito!";
  public test2:string="Stringhe";
  public url:string=window.location.href.toString();
}
