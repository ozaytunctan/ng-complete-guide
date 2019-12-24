import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication-service';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root',

})
export class AuthenticationGuard implements CanActivate, CanActivateChild {



    constructor(public auth: AuthenticationService, public route: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        debugger;

        return this.auth.isAuthenticated().then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            }
            else {
                this.route.navigate(['/login']);
            }
        });
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

}