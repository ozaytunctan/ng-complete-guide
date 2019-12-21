import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientForm: FormGroup;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(public fb: FormBuilder) { }

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
      this.ingredientAdded.emit(ingredient);
    }

    this.ingredientForm.reset();

  }
}
