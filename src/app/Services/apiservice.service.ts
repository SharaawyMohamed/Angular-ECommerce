import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  ProductURL:string="https://localhost:7014/api/Product/"
  constructor(private http:HttpClient) { }

  getAllCategories():Observable<ICategory>{
    return this.http.get<ICategory>(`${this.ProductURL}/Categories`)
  }

  //    For Admin Only
  // TODO: Update Category
  // TODO: Delete Category
  // TODO: Create Category
}
