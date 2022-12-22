import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private  _url:string ="/assets/Json/data.json";

  constructor(private http:HttpClient) { }

  getRecipes(): Observable<recipe[]>{
    return this.http.get<recipe[]>(this._url);
  }
  
}
 export interface recipe{
  name:string;
  descrption:number;
  imageUrl?:string;
}









