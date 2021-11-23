import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeopleProviderService } from '../services/people-provider.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  public employees:{}|Person[];
  public error:String="";

  constructor(private MyProvider:PeopleProviderService) { }

  ngOnInit() {
    this.MyProvider.getPeople().subscribe(data => {
      this.employees = data;
      console.log(data);
    },
      error => this.error=error);
  }

}
