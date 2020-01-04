import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { AuthenticationService } from 'src/app/service/authentication-service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor(private recipeService: RecipeService,private auth:AuthenticationService) {
    console.log(this.auth);
  }

  ngOnInit() {
    
  }

}
