import { CardstyleDirective } from './../../directives/cardstyle.directive';
import { IProduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount.pipe";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CardstyleDirective, DiscountPipe,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
// get id from router link:
ProductDetails?:IProduct
id:number;

constructor(
  private readonly _productService:ProductService,
  productService:ProductService,
  private activeRoute:ActivatedRoute,
  private router:Router
)
{
this._productService=productService;
this.id= Number(this.activeRoute.snapshot.paramMap.get('id'));
}
  ngOnInit(): void {
    this.ProductDetails= this._productService.getProductById(this.id);
    if(this.ProductDetails==null){
      this.router.navigate(['**']);
    }

  }
}
