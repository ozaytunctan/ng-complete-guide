import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication-service';


@Injectable({
    providedIn: 'root',

})
export class AuthenticationGuard implements CanActivate {


    constructor(public auth: AuthenticationService, public route: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("authentication started...");

        if (this.auth.getLoggedInUser()) {
            return true;
        }
        console.log("authentication failed...");
        this.route.navigate(["/login"]);

        return false;

    }











}