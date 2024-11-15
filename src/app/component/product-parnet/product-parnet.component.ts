import { IProduct } from './../../models/iproduct';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-parnet',
  standalone: true,
  imports: [FormsModule, ProductComponent,CommonModule],
  templateUrl: './product-parnet.component.html',
  styleUrl: './product-parnet.component.css'
})
export class ProductParnetComponent {
   parentSearch:string='';
   productCards:IProduct[]=[];
constructor() {
   }

   addProductInParent(product:IProduct):void{
    var card=this.productCards.find((prod:IProduct)=>prod.id==product.id);
    if(!card){
      // product.quantity=1;
      // this.productCards.push(product);
      this.productCards.push({...product,quantity:1})
    }else{
      card.quantity++;
    }
   }

   //TODO:remove object from card.
   deleteCard(id:number){
    var index=this.productCards.findIndex((card:IProduct)=>card.id==id);
    if(this.productCards[index].quantity==1){
      this.productCards.splice(index,1);
    }else{
      this.productCards[index].quantity--;
    }
   }
}
