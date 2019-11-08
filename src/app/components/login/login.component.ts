
import ILoginModel from '../../models/ILoginModel';
import { LoginService } from '../../services/login.service';
import { DEFAULT_HTTP_OPTIONS, OS_TYPE } from '../../constants/main.constants';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  togglePassword = false;
  hasErrors = false;
  emptyFields = false;

  loginData: ILoginModel = {
    email: '',
    password: ''
  };
  private subscriptions: Array<Subscription> = [];
  constructor(public loginService: LoginService,
              public router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.loginData.email && this.loginData.password) {
      const result = {
        email: this.loginData.email,
        password: this.loginData.password,
        osType: OS_TYPE,
      };
      this.subscriptions.push(
        this.loginService.loginUser(result).subscribe(response => {
          if (response && response.success && response.data) {
            this.loginService.signedUser = response.data;
            this.router.navigateByUrl('location');
          }
        }, error => {
          this.hasErrors = true;
        })
      );
    } else {
      this.emptyFields = true;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }
}
