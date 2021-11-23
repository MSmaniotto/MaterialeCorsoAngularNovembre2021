import { Component, OnInit } from '@angular/core';
import { modello } from './modello'

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  public model=new modello();
  constructor() { }

  ngOnInit() {
  }

  inviaForm(){
    console.log(this.model);
  }

}
