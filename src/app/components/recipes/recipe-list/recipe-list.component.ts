import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", 'This is simple a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
    new Recipe("Cola", 'This is simple a cola', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
    new Recipe("Çay", 'This is simple a tea', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg')
    , new Recipe("A Test Recipe", 'This is simple a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
    new Recipe("Cola", 'This is simple a cola', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
    new Recipe("Çay", 'This is simple a tea', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
  ];

  @Output() recipeWasSelect = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(selectedRecipe: Recipe) {
    this.recipeWasSelect.emit(selectedRecipe);
  }

}
