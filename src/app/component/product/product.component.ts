import { IProduct } from './../../models/iproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from "../../pipes/discount.pipe";
import { CardstyleDirective } from '../../directives/cardstyle.directive';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
import { IProductResponse } from '../../models/iproduct-response';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountPipe, CardstyleDirective, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filterdProducts!:IProductResponse;
  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProducts();

  }

  getAllProducts(): void {
    this._productService.getAllProducts().subscribe({
      next: (data: IProductResponse) => {
        this.filterdProducts = data;
        console.log(data)

      },
      error: (err) => {
        console.error('Failed to fetch products', err);
      }
    });
  }

  @Input() set childSearch(searchValue: string) {
    if (!this.filterdProducts || this.filterdProducts.data.length === 0) {
      console.warn('Products are not yet loaded.');
      return;
    }

   this._productService.searchLogic(searchValue).subscribe({
    next:(data:IProductResponse)=>{
      this.filterdProducts=data;
    }
   })
  }

  @Output() productCardsEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  addProductToCard(product: IProduct): void {
    this.productCardsEvent.emit(product);
  }

}
