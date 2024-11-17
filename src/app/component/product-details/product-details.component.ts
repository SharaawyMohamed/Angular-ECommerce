import { IProduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount.pipe";
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
// get id from router link:
ProductDetails?:IProduct;
Id:number;

constructor(
  private _productService:ProductService,
  productService:ProductService,
  private activeRoute:ActivatedRoute,
  private router:Router
)
{
this._productService=productService;
this.Id= Number(this.activeRoute.snapshot.paramMap.get('Id'));
}
  ngOnInit(): void {
    this.getProductById(this.Id)
    if(this.ProductDetails==null){
      this.router.navigate(['**']);
    }

  }
  getProductById(Id:number):void{
  this._productService.getProductById(Id).subscribe({
    next:(data:IProduct)=>{
      this.ProductDetails=data;
    },
    error: (err) => {
      console.error('Failed to fetch products', err);
    }
  });
  }
}
