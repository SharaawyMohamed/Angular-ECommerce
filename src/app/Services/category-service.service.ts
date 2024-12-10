import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public Categories:ICategory[]=[]

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${environment.baseURL}Category/GetAllCategories`);
  }


}
