import { IProductResponse } from './../models/iproduct-response';
import { IProduct } from './../models/iproduct';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL: string = "https://localhost:7014/api/Product";
  public Response!: IProductResponse;

  constructor(private httpClient: HttpClient) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.getAllProducts().subscribe({
      next: (data: IProductResponse) => {
        this.Response = data;
        console.log("Products loaded:", this.Response); // Debugging
      },
      error: (er) => {
        console.error("Error fetching products:", er);
      }
    });
  }

  searchLogic(search: string): IProduct[] {
    if (!this.Response || this.Response.data.length === 0) {
      return [];
    }

    search = search.toLowerCase();
    return this.Response.data.filter((product: IProduct) =>
      product.name.toLowerCase().includes(search)
    );
  }

  getAllProducts(): Observable<IProductResponse> {
    return this.httpClient.get<IProductResponse>(`${this.productURL}/Products`);
  }

  getProductById(Id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.productURL}/${Id}`);
  }

  // TODO: Create Product For Admin

  // TODO: Delete Product For Admin

  // TODO: Update Product For Admin
}
