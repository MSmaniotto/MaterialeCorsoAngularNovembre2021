import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-sample',
  templateUrl: './ng-switch-sample.component.html',
  styleUrls: ['./ng-switch-sample.component.css']
})
export class NgSwitchSampleComponent implements OnInit {

  public color:String="red";

  constructor() { }

  ngOnInit() {
  }

}
