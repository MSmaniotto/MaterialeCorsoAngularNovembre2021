import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Person } from '../models/person';

const httpOptions = {
  headers:new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PeopleProviderService {

  constructor(private http:HttpClient) {}
  private _url:string="http://localhost:3000/people"

  public getPeople():Observable<Person[]>{
    return this.http.get<Person[]>(this._url, httpOptions);
  }

  public getPerson(id:number):Observable<Person>{
    var param:HttpParams=new HttpParams().set("id",id.toString());

    return this.http.get(this._url, {headers:httpOptions.headers, params:param})
    .pipe(map(element => element=<Person>element),catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message)
  }
}
