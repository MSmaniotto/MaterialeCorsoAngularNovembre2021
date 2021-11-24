import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PeopleProviderService } from '../services/people-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  public people:Person[]=[];
  public error:string="";
  constructor(
    private peopleProvider:PeopleProviderService,
    private router:Router
    ) { }

  ngOnInit() {
    this.peopleProvider.getPeople().subscribe({
      next:
        data => {
          this.people=data;
          this.error="";
        },
      error:
        error => this.error=error
    });
  }

  public navigate(id:string){
    this.router.navigate(["/person", id]);
  }

}
