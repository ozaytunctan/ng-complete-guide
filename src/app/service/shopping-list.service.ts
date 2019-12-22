import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';
import { isRegExp } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() {

  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredientList: Ingredient[]) {
    this.ingredients.push(...ingredientList);
    this.ingredientChanged.emit(this.ingredients.slice());
  }



}
