import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe-detail') recipe:Recipe;
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingItemList(){
    this.recipeService.addIngredientsShoppingList(this.recipe.ingredients);
  }


}
