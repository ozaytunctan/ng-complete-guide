import { Component } from '@angular/core';
import { SharedPreference } from './helper/shared-preference';
import { ServiceAsync } from './service/service-async.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  loadedFeature = "recipe";

  constructor(sharedPreference: SharedPreference,private serviceAsync:ServiceAsync) {

  }

  ngOnInit(): void {
  }

  onNavigate(feature: string) {
    debugger;
    this.loadedFeature = feature;
  }


}
