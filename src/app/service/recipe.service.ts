import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  

  selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", 'This is simple a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg',
      [
        new Ingredient("Küçük Boy", 5),
        new Ingredient("Orta Boy", 10)
      ]),
    new Recipe("Cola", 'This is simple a cola', 'https://ayb.akinoncdn.com/products/2019/01/22/1485/4a19a83a-7901-456b-b12e-0b9798512b07.jpg',
      [
        new Ingredient("Cola", 6)
      ]),
    new Recipe("Çay", 'This is simple a tea', 'https://static.daktilo.com/sites/71/uploads/2019/10/01/cay-1569920968.jpg'
      , [
        new Ingredient("Dem", 8),
        new Ingredient("Su", 5)
      ]
    )
  ];

  constructor(private shoppingService:ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}
