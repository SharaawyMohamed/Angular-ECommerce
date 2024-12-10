import { IProductResponse } from './../models/iproduct-response';
import { IProduct } from './../models/iproduct';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public Response!: IProductResponse;
  constructor(private httpClient: HttpClient) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.getAllProducts().subscribe({
      next: (data: IProductResponse) => {
        this.Response = data;
        console.log("Products loaded:", this.Response);
      },
      error: (er) => {
        console.error("Error fetching products:", er);
      }
    });
  }

  searchLogic(search: string): Observable<IProductResponse> {
    let params=new HttpParams().set('Search',search);
    return this.httpClient.get<IProductResponse>(`${environment.baseURL}Product/products`,{params});
  }

  getAllProducts(): Observable<IProductResponse> {
    return this.httpClient.get<IProductResponse>(`${environment.baseURL}Product/Products`);
  }

  getProductById(Id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.baseURL}Product/${Id}`);
  }
  getProductsIds():number[]{
    return this.Response.data.map((Ids=>Ids.id));
  }
  // TODO: Create Product For Admin

  // TODO: Delete Product For Admin

  // TODO: Update Product For Admin
}
