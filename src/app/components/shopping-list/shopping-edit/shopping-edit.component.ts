import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredientForm: FormGroup;
  editMode: boolean = false;
  editIngredient: Ingredient;
  editIngredientSubscription: Subscription;
  editIngredientId: number;
  constructor(private fb: FormBuilder, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = this.fb.group({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.max(100), Validators.pattern("^[0-9]+[0-9]*$")])
    });
    this.editIngredientSubscription = this.shoppingListService.editStartedIngredient.subscribe(index => {
      this.editIngredientId = index;
      this.editIngredient = this.shoppingListService.getIngredient(index);
      this.editMode = true;
      this.ingredientForm.patchValue({
        name: this.editIngredient.name,
        amount: this.editIngredient.amount
      });
    });
  }

  onSubmit() {
    if (this.ingredientForm.valid) {
      let ingredient: Ingredient = new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount);
      if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editIngredientId, ingredient);
      }
      else {
        this.shoppingListService.addIngredient(ingredient);
      }
      this.editMode=false;
      this.editIngredientId=-1;
      this.ingredientForm.reset();
    }
  }

  ngOnDestroy(): void {
    this.editIngredientSubscription.unsubscribe();
  }

  onClear(){
    this.ingredientForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIgredient(this.editIngredientId);
  }

}