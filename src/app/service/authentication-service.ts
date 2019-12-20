import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import { LoggedInUser } from '../model/logged-in-user.model';
import { UserRole } from '../model/user-role';
import { SharedPreference } from '../helper/shared-preference';
import { ConstantParameter } from '../common/constant-parameter';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    isLogin: boolean = false;

    constructor(public http: HttpClient, public sharedPreference: SharedPreference) {

    }

    public login(loginModel: Login): LoggedInUser {
        debugger;
        let loggedInUser: LoggedInUser;

        let activeUser = this.getLoggedInUser();
        if (!activeUser) {

            //Kullanıcı varmı doğrula
            if (loginModel.username == "ozaytunctan", loginModel.password = "123") {

                loggedInUser = {
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
                this.isLogin = !this.isLogin;
            }
        }
        else {
            loggedInUser = activeUser;
        }


        return loggedInUser;

    }

    public isLoggedIn(): boolean {
        return this.isLogin;
    }

    public getLoggedInUser(): any {
        return this.sharedPreference.get(ConstantParameter.LOGGED_IN_USER);

    }


}