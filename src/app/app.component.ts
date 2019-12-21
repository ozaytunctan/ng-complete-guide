import { Component } from '@angular/core';
import { SharedPreference } from './helper/shared-preference';
import { ConstantApiParameter } from './common/constant.static';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  loadedFeature = "recipe";

  constructor(sharedPreference: SharedPreference) {

  }

  ngOnInit(): void {

  }

  onNavigate(feature: string) {
    debugger;
    this.loadedFeature = feature;
  }


}
