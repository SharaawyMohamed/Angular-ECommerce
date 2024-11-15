import { IProduct } from './../../models/iproduct';
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from "../../pipes/discount.pipe";
import { CardstyleDirective } from '../../directives/cardstyle.directive';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonModule, DiscountPipe,CardstyleDirective,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
  export class ProductComponent implements OnInit{

    private  _productService:ProductService;
    filterdProducts:IProduct[]=[];

    constructor(productService:ProductService) {
      this._productService=productService;
    }

  ngOnInit(): void {
    this.filterdProducts=this._productService.getAllProducts() ;
    }

  @Input() set childSearch(searchValue:string) {
   this.filterdProducts=this._productService.searchLogic(searchValue)
   }

  // (Events& Output decerator) in Angular:
   @Output() productCardsEvent:EventEmitter<IProduct>=new EventEmitter<IProduct>()
    addProductToCard(product:IProduct){
     this.productCardsEvent.emit(product);
    }

}


