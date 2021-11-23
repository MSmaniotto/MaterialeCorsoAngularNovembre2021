import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-sample',
  templateUrl: './ng-for-sample.component.html',
  styleUrls: ['./ng-for-sample.component.css']
})
export class NgForSampleComponent implements OnInit {

  public colors:String[] = ["red","blue","green","yellow"];
  
  constructor() { }

  ngOnInit() {
  }

}
