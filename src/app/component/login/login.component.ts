import { subscribe } from 'diagnostics_channel';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service';
import { ILoginResponse } from '../../models/ilogin-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!:string;
  password!:string;
  response!:ILoginResponse;
constructor(private authService:AuthService) {}

login() {
  this.authService.login(this.email, this.password).subscribe({
    next: (data: ILoginResponse) => {
      this.response = data;
      console.log('Login successful:', data);
    },
    error: (err) => {
      console.error('Login error response:', err);
    },
  });
}
}
