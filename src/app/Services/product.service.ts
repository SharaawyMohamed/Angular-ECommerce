import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { IpcNetConnectOpts } from 'net';

@Injectable({
  providedIn: 'root'
})
export class ProductService   {

  private products!:IProduct[];
  constructor(  ) {
    this.products = [
      {
        id: 1,
        name: "Iphone 15 Pro Max",
        image: "https://f.nooncdn.com/p/pnsku/N70024017V/45/_/1710700295/fddbf118-aed7-45d0-85a7-8bfb4903e3e4.jpg?format=avif&width=240",
        category: "IPhones",
        price: 1234,
        quantity: 0,
        showImage: true
      },
      {
        id: 2,
        name: "Samsung Galaxy S23",
        image: "https://f.nooncdn.com/p/pnsku/N70105580V/45/_/1725965005/42e61dba-7a45-4c48-93c6-081a26548a2e.jpg?format=avif&width=240",
        category: "Samsung Phones",
        price: 999,
        quantity: 0,
        showImage: true
      },
      {
        id: 3,
        name: "Google Pixel 8",
        image: "https://f.nooncdn.com/p/pnsku/N70027157V/45/_/1701156193/1e032bd0-f4cd-44ea-aa51-b62371dda737.jpg?format=avif&width=240",
        category: "Google Phones",
        price: 850,
        quantity: 10,
        showImage: true
      },
      {
        id: 4,
        name: "OnePlus 11",
        image: "https://f.nooncdn.com/p/pnsku/N70117588V/45/_/1728451947/0a412e66-8155-4ae3-ba11-211e3447643d.jpg?format=avif&width=240",
        category: "OnePlus Phones",
        price: 799,
        quantity: 8,
        showImage: true
      },
      {
        id: 5,
        name: "Sony Xperia 5 V",
        image: "https://f.nooncdn.com/p/pnsku/N70024019V/45/_/1700127360/4291bef8-e648-4d7d-a516-2207129501c3.jpg?format=avif&width=240",
        category: "Sony Phones",
        price: 700,
        quantity: 6,
        showImage: true
      },
      {
        id: 6,
        name: "Huawei Mate 50 Pro",
        image: "https://f.nooncdn.com/p/pnsku/N70060367V/45/_/1712129480/6f440123-082e-4dd0-9eaa-d5453244fcc3.jpg?format=avif&width=240",
        category: "Huawei Phones",
        price: 899,
        quantity: 4,
        showImage: true
      }
    ];
   }

  // ngOnInit(): void {

  // }
  searchLogic(search:string):IProduct[]{
    search=search.toLowerCase();
    return this.products.filter(
      (product:IProduct)=>product.name.toLowerCase().includes(search)
    );
  }

  getAllProducts():IProduct[]{
    return this.products;
  }

  getProductById(id:number):IProduct|undefined{
    var product=this.products.find((prod:IProduct)=>prod.id==id);
    return product;
  }

  createProduct(product:IProduct):boolean{
    var isfound= this.products.find((prod:IProduct)=>prod.id==product.id);
    if(!isfound){
      return false;
    }
    this.products.push(product);
    return true;
  }

  updateProduct(product:IProduct):boolean{
    var index= this.products.findIndex((prod:IProduct)=>prod.id==product.id);
    if(index==-1)
    {
      return false;
    }

    this.products.splice(index,1);
    this.products.push(product);
    return true;
  }
}
