import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication-service';
import { Login } from 'src/app/model/login.model';
import { LoginType } from 'src/app/model/enums/login-type.enum';
import { LoggedInUser } from 'src/app/model/logged-in-user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginBuilder: FormBuilder;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public route: Router, public auth: AuthenticationService) {
    this.loginBuilder = fb;
    if (this.auth.getLoggedInUser()) {
      this.navigateToHomePage();
    }
  }

  ngOnInit() {

    this.initialize();

  }

  initialize() {
    this.loginForm = this.loginBuilder.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }
  login() {
    debugger
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      let login: Login = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
        email: this.loginForm.controls.username.value,
        status: LoginType.USER
      };
      let loggedInUser: LoggedInUser = this.auth.login(login);

      if (loggedInUser) {
        this.navigateToHomePage();
      }
      else {
        alert("Lütfen Kullanıcı Bilgilerinizi doğru giriniz.!!!");
      }
    }


  }

  navigateToHomePage() {
    this.route.navigate(["/home"]);
  }

}
