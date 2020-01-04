import { Injectable, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { LoggedInUser } from '../model/logged-in-user.model';
import { SharedPreference } from '../helper/shared-preference';
import { ConstantParameter } from '../common/constant-parameter';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements OnInit {


    loggedIn: boolean = false;

    changedLoggedIn = new Subject<boolean>();

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
        this.changedLoggedIn.next(this.loggedIn);
        return this.getLoggedInUser();

    }

    public logout() {
        this.loggedIn = false;
        this.sharedPreference.remove(ConstantParameter.LOGGED_IN_USER);
        this.changedLoggedIn.next(this.loggedIn);
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        return this.loggedIn || this.getLoggedInUser() != undefined;
    }

    public getLoggedInUser(): any {
        return this.sharedPreference.get(ConstantParameter.LOGGED_IN_USER);

    }








}