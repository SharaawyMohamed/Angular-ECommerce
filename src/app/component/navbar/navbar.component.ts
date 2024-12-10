import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardstyleDirective } from '../../directives/cardstyle.directive';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CardstyleDirective,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 isLoggedIn:boolean=true;
 constructor(private auth:AuthService) {}
  ngOnInit(): void {
    this.isLoggedIn=this.auth.isLoggedIn();
  }
}
