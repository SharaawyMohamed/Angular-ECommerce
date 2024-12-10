import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductParnetComponent } from './component/product-parnet/product-parnet.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { InfoComponent } from './component/info/info.component';

export const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'product',component:ProductParnetComponent,title:'Products'},
   {path:'product/:Id',component:ProductDetailsComponent,title:"Product Details"},
  {path:"register",component:RegisterComponent,title:"Register"},
  {path:"login",component:LoginComponent,title:"Login"},
  {path:"info",component:InfoComponent,title:"About Us"}
  ]},

  {path:'**',component:NotFoundComponent}
];
