import { IBrand } from './../../models/ibrand';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { CategoryService } from '../../Services/category-service.service';
import { BrandService } from '../../Services/brand-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 public Categories:ICategory[]=[];
 public Brands:IBrand[]=[];
  constructor(private _brandService:BrandService,private _categoryService:CategoryService) {

    // this.productService.getAllProducts().subscribe({
    //   next:(data:any)=>{
    //     this.Products=data;
    //   },
    //   error:(er)=>{
    //     console.error("Error:",er);
    //   }
    // });
    //console.log(this.Products);
  }
  ngOnInit(): void {
    this.loadCategories();
    this.loadBrands();
  }
  loadCategories(){
    this._categoryService.getAllCategories().subscribe({
      next:(data:ICategory[])=>{
        this.Categories=data;
        console.log(data);
      },
      error:(er)=>{
        console.error("Error:",er);
      }
    });
  }

  loadBrands(){
    this._brandService.getAllBrands().subscribe({
      next:(data:IBrand[])=>{
        this.Brands=data;
        console.log(data);
      },
      error:(er)=>{
        console.error("Error:",er);
      }
    });
  }
}
