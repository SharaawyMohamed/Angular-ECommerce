import { IBrand } from './../models/ibrand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private BrandURL:string="https://localhost:7014/api/Brand";
  constructor(private http:HttpClient) { }


getAllBrands():Observable<IBrand[]>{
  return this.http.get<IBrand[]>(`${this.BrandURL}/Brands`);
}

     //    For Admin Only
  // TODO: Update Brand
  // TODO: Delete Brand
  // TODO: Create Brand
}
