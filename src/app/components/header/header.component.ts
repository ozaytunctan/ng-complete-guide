import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication-service';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

    collapsed = true;
    loggedIn: boolean = false;

    @Output()
    featureSelected = new EventEmitter<string>();

    constructor(private auth: AuthenticationService) {
    }
    onSelect(feature: string) {
        this.featureSelected.next(feature);
    }

    ngOnInit() {
        this.auth.changedLoggedIn.subscribe((authenticated: boolean) => {
            this.loggedIn = authenticated;
        });
    }
    onLogout() {
        this.loggedIn = false;
        this.auth.logout();
    }


}