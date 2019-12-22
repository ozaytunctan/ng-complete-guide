import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipe-item") recipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
