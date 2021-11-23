import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleProviderService {

  constructor(private http:HttpClient){}
  private _url='../assets/people.json'

  public getPeople():Observable<Person[]>{
    return this.http.get<Person[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message);
  }
  
}
