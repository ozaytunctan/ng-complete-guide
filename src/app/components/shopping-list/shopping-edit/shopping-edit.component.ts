import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientForm: FormGroup;
  
  constructor(private fb: FormBuilder,private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = this.fb.group({
      name: new FormControl('',Validators.required),
      amount: new FormControl()
    });
  }

  onAddItem() {
    if (this.ingredientForm.valid) {
      let ingredient: Ingredient = {
        name: this.ingredientForm.controls.name.value,
        amount: this.ingredientForm.controls.amount.value
      };
      this.shoppingListService.addIngredient(ingredient);
    }
    this.ingredientForm.reset();

  }
}
