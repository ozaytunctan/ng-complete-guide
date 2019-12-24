import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {


  loadedFeature = "recipe";
  constructor(private router: Router,
    private route: ActivatedRoute) {

    }
    
    subscription: Subscription;
    
    ngOnInit(): void {
      
    //Read router aşağıdaki şekilde değer alınabilir. tarayıcı url den değerleri almak için kullanılır.
    // this.route.params["id"] bu şekıilde alınabilir
    //  this.route.params.subscribe((params:Params)=>{
    //   params["name"]
    //   params["id"] });

    /**
     * 1. Query params alamk için ?name='ozay
     *   this.route.queryParams
     * 2. Query param # value get ?name='ozay! #loding
     *   this.route.fragment
     */

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onNavigateUrl(id: number) {
    //http://localhost:4200/recipe/:id/edit?name=Test&activated=true#turkey
    //this.router.navigate(['/recipe', id, 'edit'], { queryParams: { name: 'Test', activated: true }, relativeTo: this.route, fragment: 'turkey' });

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}