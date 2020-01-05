import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication-service';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit ,OnDestroy{

    collapsed = true;
    loggedIn: boolean = false;

    @Output()
    featureSelected = new EventEmitter<string>();

    changedLoggedInSubscription:Subscription;

    constructor(private auth: AuthenticationService) {
    }
    onSelect(feature: string) {
        this.featureSelected.next(feature);
    }

    ngOnInit() {
        this.loggedIn=this.auth.isLoggedIn();
       this.changedLoggedInSubscription= this.auth.changedLoggedIn.subscribe((authenticated: boolean) => {
            this.loggedIn = authenticated;
        });
    }
    onLogout() {
        this.loggedIn = false;
        this.auth.logout();
    }

    ngOnDestroy(){
        this.changedLoggedInSubscription.unsubscribe();
    }


}