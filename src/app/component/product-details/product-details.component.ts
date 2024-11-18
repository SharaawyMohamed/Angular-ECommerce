import { IProduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount.pipe";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
ProductDetails!:IProduct;
Id:number;

constructor(
  private _productService:ProductService,
  private activeRoute:ActivatedRoute,
  private router:Router
)
{
this.Id= Number(this.activeRoute.snapshot.paramMap.get('Id'))||0;
this.getProductById(this.Id);
console.log(this.Id);
if(!this.Id){
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
