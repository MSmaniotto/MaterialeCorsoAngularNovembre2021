import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PeopleProviderService } from '../../services/people-provider.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  public people:Person[];
  public error:string="";
  constructor(private peopleProvider:PeopleProviderService) { }

  ngOnInit() {
    this.peopleProvider.getPeople().subscribe(data => this.people=data,
      error => this.error=error);
  }

}
