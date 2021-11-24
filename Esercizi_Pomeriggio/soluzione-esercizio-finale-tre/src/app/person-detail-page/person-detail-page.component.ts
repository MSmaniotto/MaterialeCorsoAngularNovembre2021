import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import { PeopleProviderService } from '../services/people-provider.service';

@Component({
  selector: 'app-person-detail-page',
  templateUrl: './person-detail-page.component.html',
  styleUrls: ['./person-detail-page.component.css']
})
export class PersonDetailPageComponent implements OnInit {

  public person:Person=new Person(null,"",null);

  constructor(private route: ActivatedRoute, private peopleProvider:PeopleProviderService) { }

  ngOnInit(): void {
    let id:number= parseInt(this.route.snapshot.paramMap.get('id'));
    this.peopleProvider.getPerson(id).subscribe(person=>
      this.person=person[0]);
  }

}
