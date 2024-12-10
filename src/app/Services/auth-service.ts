import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../models/ilogin-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient){ }
login(email:string,password:string):Observable<ILoginResponse>{

  const paylod={email,password};
  // var params=new HttpParams()
  //         .set('email',email)
  //         .set('password',password);

  return this.httpClient.post<ILoginResponse>(`${environment.baseURL}Account/login`,paylod)
}
logout(){
  localStorage.removeItem('token');
}
}
