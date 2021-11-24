import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Food } from '../models/food';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FoodProviderService {

  constructor(private http:HttpClient) {}
  private _url:string="../api/food";

  public getFood():Observable<Food[]>{
    return this.http.get(this._url, httpOptions)
    .pipe(
      map(res => res=<Food[]>res),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error:HttpErrorResponse){
    console.log(error.message);
    return throwError(error.message);
  }
}
