import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../models/ilogin-response';
import { IUserRegister } from '../models/IUserRegister';
import { IUserRegisterResponse } from '../models/iuser-register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient){ }

register(user:IUserRegister):Observable<IUserRegisterResponse>{
  const paylod={user};
  return this.httpClient.post<IUserRegisterResponse>(`${environment.baseURL}/Account/Register`,paylod)
}

login(email:string,password:string):Observable<ILoginResponse>{
  const paylod={email,password};

  return this.httpClient.post<ILoginResponse>(`${environment.baseURL}Account/login`,paylod)
}
logout(){
  localStorage.removeItem('token');
}

isLoggedIn():boolean{
return localStorage.getItem("token")?true:false;
}
}
