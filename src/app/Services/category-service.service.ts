import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BaseUrl: string = "https://localhost:7014/api/Category";
  public Categories:ICategory[]=[]

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.BaseUrl}/Categories`);
  }


}
