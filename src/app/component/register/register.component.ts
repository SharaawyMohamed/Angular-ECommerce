import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service';
import { IUserRegister } from '../../models/IUserRegister';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUserRegisterResponse } from '../../models/iuser-register-response';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 user!:IUserRegister
 response!:IUserRegisterResponse
constructor(private auth:AuthService , private router:Router){}

addNewUser(){

  this.auth.register(this.user).subscribe({
    next:(data:IUserRegisterResponse)=>{
      this.response=data;
      localStorage.setItem("token",this.response.token)
      console.log(data)
    },
    error: (err) => {
      console.error('Login error response:', err);
    }
  });

  this.router.navigate(['/product'])
  }

}

