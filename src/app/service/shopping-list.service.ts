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

  editStartedIngredient = new Subject<number>();

  constructor() {

  }

  nextEditIgredient(id: number) {
    this.editStartedIngredient.next(id);
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
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

  updateIngredient(index: number, newingredient: Ingredient) {
    this.ingredients[index] = newingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIgredient(deleteIngredientId: number) {
   this.ingredients.splice(deleteIngredientId,1);
   this.ingredientChanged.next(this.ingredients.slice());
  }



}
