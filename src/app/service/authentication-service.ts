import { Injectable, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import { LoggedInUser } from '../model/logged-in-user.model';
import { UserRole } from '../model/user-role';
import { SharedPreference } from '../helper/shared-preference';
import { ConstantParameter } from '../common/constant-parameter';
import { AppComponent } from '../app.component';
import { RecipeService } from './recipe.service';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements OnInit {


    loggedIn: boolean = false;

    constructor(
        private sharedPreference: SharedPreference,
        private router: Router) {

    }
    ngOnInit(): void {
    
    }
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            // setTimeout(() => {
                resolve(this.loggedIn || this.getLoggedInUser());
            // }, 10);
        });
        return promise;
    }

    public login(loginModel: Login): LoggedInUser {

        if (!this.loggedIn || this.getLoggedInUser()) {
            //Kullanıcı varmı doğrula
            if (loginModel.username == "ozaytunctan" && loginModel.password == "123") {

                let loggedInUser: LoggedInUser = {
                    username: loginModel.username,
                    email: loginModel.email,
                    password: loginModel.password,
                    firstName: "Ozay",
                    lastName: "TUNCTAN",
                    gender: "Erkek",
                    phoneNumber: "5380110467",
                    roles: [{ id: 1, name: "READ", status: "1" }]
                };
                this.sharedPreference.put(ConstantParameter.LOGGED_IN_USER, loggedInUser, ConstantParameter.EXPIRE_TIME);
                this.loggedIn = true;
            }
        }
        return this.getLoggedInUser();

    }

    public logout() {
        this.loggedIn = false;
        this.sharedPreference.remove(ConstantParameter.LOGGED_IN_USER);
        this.router.navigate(['/login']);
        console.log("logout() ...");

    }
    public isLoggedIn(): boolean {
        return this.loggedIn;
    }

    public getLoggedInUser(): any {
        return this.sharedPreference.get(ConstantParameter.LOGGED_IN_USER);

    }








}