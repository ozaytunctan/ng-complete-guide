import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipes: Recipe[] = [
    new Recipe("Börek", 'Bilice börek ',
      'https://i4.hurimg.com/i/hurriyet/75/1500x844/5ab8c3f5c9de3d234835a917.jpg',
      [
        new Ingredient("3 adet Yumurta", 5),
        new Ingredient("2 yemek kaşığı sıvı yağ", 1),
        new Ingredient("5 adet yufka",10)
      ]
      ),

      new Recipe("Tost", 'Basit Tost Tarifi',
      'https://i4.hurimg.com/i/hurriyet/75/1500x844/5c94ed86c03c0e3538e8b019.jpg',
      [
        new Ingredient("1 yumurta.", 1),
        new Ingredient("3-4 dilim sucuk.", 2),
        new Ingredient("4-5 dilim kaşar peyniri.",3),
        new Ingredient("2 dilim tost ekmeği.",12)

      ]
      )    
  ];

  constructor(private shoppingService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id:number){
   return this.recipes[id];
  }

  addIngredientsShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}
