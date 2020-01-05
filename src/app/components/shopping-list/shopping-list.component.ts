import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {


  ingredients: Ingredient[] = [];

  igChangeSub:Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  
    this.igChangeSub=this.shoppingListService.ingredientChanged.subscribe(
      (recivedIngredients: Ingredient[]) => {
      this.ingredients = recivedIngredients;
    });

  }
  onEditItem(id: number) {
    this.shoppingListService.nextEditIgredient(id);
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }


}
