import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-sample',
  templateUrl: './pipes-sample.component.html'
})
export class PipesSampleComponent {
  name:String= "someone";
  message:String= "this is a sentence";
  public person={
    "firstName":"Manfredi",
    "lastName":"Smaniotto"
  }
  public date:Date=new Date();
}
