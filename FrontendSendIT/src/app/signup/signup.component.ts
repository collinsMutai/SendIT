import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Icustomer } from '../interfaces/interfaces';
import { OrderState } from '../Redux/Reducer/OrderReducer';
import { OrderService } from '../Services/order.service';
import * as Actions from '../../../src/app/Redux/Actions/OrdersActions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  name!: string;
  email!: string;
  password!: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private store: Store<OrderState>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        this.checkSpecialCharacters,
        this.checkNumber,
        this.checkCapital,
      ]),
    });
  }
  options: AnimationOptions = {
    path: '/assets/lottie/login.json',
  };

  animationCreated(animationItem: AnimationItem): void {}
  checkSpecialCharacters(
    control: FormControl
  ): { [s: string]: boolean } | null {
    const value = control.value;
    const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\?]+/.test(value);
    return !special ? { special: true } : null;
  }
  checkNumber(control: FormControl): { [s: string]: boolean } | null {
    const value = control.value;
    const number = /[0-9]+/.test(value);
    return !number ? { number: true } : null;
  }
  checkCapital(control: FormControl): { [s: string]: boolean } | null {
    const value = control.value;
    const capital = /[A-Z]+/.test(value);
    return !capital ? { capital: true } : null;
  }
  checkMinimum(): boolean {
    const result = this.form.get('password')?.errors!['minlength'] as {
      actualLength: number;
      requiredLength: number;
    };
    if (result.actualLength < result.requiredLength) {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {
    this.store.dispatch(
      Actions.RegisterCustomer({ newCustomer: this.form.value })
    );
    this.router.navigate(['/login']);
  }
}
