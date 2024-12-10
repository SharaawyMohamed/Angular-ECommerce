import { IProduct } from './../../models/iproduct';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount.pipe";
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
ProductDetails!:IProduct;
Id:number=0;
currentIndex:number=0;
productIds:number[]=[];

constructor(
  private _productService:ProductService,
  private activeRoute:ActivatedRoute,
  private router:Router,
  private location:Location
)
{
}
ngOnInit(): void {
  this.productIds=this._productService.getProductsIds();
   console.log(this.productIds)
    this.activeRoute.paramMap.subscribe((params) => {
        this.Id = Number(params.get('Id')) || 0;
        this.getProductById(this.Id);
      });
  }

  getProductById(Id: number): void {
    this._productService.getProductById(Id).subscribe({
      next: (data: IProduct) => {
        this.ProductDetails = data;

          if (!this.ProductDetails) {
          this.router.navigate(['**']);
        }
      },
      error: (err) => {
        console.error('Failed to fetch products', err);
      }
    });
  }

  Previous(){

     this.currentIndex=this.productIds.indexOf(this.Id);
     if(this.currentIndex>0){
       this.router.navigate(['/product',this.productIds[--this.currentIndex]])
       console.log(this.currentIndex);
     }
  }

  Next(){

    this.currentIndex=this.productIds.indexOf(this.Id);
    if(this.currentIndex<this.productIds.length-1){
      this.router.navigate(['/product',this.productIds[++this.currentIndex]])
      console.log(this.currentIndex);
    }
  }
  goBack(){
   this.location.back
  }
}
