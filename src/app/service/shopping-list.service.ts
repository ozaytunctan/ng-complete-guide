import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredientChanged = new Subject<Ingredient[]>();

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
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredientList: Ingredient[]) {
    this.ingredients.push(...ingredientList);
    this.ingredientChanged.next(this.ingredients.slice());
  }



}
