import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-sample',
  templateUrl: './ng-if-sample.component.html',
  styleUrls: ['./ng-if-sample.component.css']
})
export class NgIfSampleComponent implements OnInit {

  public bool:Boolean=true;

  constructor() { }

  ngOnInit() {
  }

}
