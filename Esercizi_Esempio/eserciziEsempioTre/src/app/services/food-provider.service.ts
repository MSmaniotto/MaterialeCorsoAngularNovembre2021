import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Food } from '../models/food';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FoodProviderService {
  
  constructor(private http:HttpClient) {}
  private _url:string="http://localhost:3000/food";

  public getFood():Observable<Food[]>{
    return this.http.get<Food[]>(this._url, httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message)
  }
}
