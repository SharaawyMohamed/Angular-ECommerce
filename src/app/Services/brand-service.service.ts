import { IBrand } from './../models/ibrand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http:HttpClient) { }

getAllBrands():Observable<IBrand[]>{
  return this.http.get<IBrand[]>(`${environment.baseURL}Brand/GetAllBrands`);
}

  //    For Admin Only
  // TODO: Update Brand
  // TODO: Delete Brand
  // TODO: Create Brand
}
