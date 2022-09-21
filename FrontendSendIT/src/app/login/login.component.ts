import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LoginDetails, LoginResponse } from '../interfaces/interfaces';
import { AuthService } from '../Services/auth.service';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  logged = false;
  error = 'All fields required';
  @ViewChild('form') form!: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: OrderService
  ) {
    
  }
  errorMessage!: string;

  ngOnInit(): void {}
  options: AnimationOptions = {
    path: '/assets/lottie/login.json',
  };

  animationCreated(animationItem: AnimationItem): void {}

  onSubmit() {
    const user: LoginResponse = this.form.value;
    this.auth.logUser(user).subscribe(
      (response) => {
        
        localStorage.setItem('name', response.name);
        localStorage.setItem('email', response.email);
        localStorage.setItem('token', response.token);
        
        localStorage.setItem('role', response.role);
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        error = console.log(error);
      }
    );
  }
 
  onClose() {
    this.logged = false;
  }
}
