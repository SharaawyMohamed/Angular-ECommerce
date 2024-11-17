import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductParnetComponent } from './component/product-parnet/product-parnet.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

export const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'product',component:ProductParnetComponent,title:'Products'},
   {path:'product/:Id',component:ProductDetailsComponent,title:"Product Details"}
  ]},

  {path:'**',component:NotFoundComponent}
];
