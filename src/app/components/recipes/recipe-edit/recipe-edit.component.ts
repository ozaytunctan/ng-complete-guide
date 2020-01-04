import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {


  id: number;

  editRecipeForm: FormGroup;

  editMode: boolean = false;

  recipe: Recipe;

  recipeRouteSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeRouteSubscription = this.route
      .data
      .subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      })
    this.initializeForm();

  }

  initializeForm() {
    if (!this.recipe)
      this.recipe = new Recipe("", "", "", []);

    this.editRecipeForm = this.fb.group({
      name: new FormControl(this.recipe.name),
      description: new FormControl(this.recipe.description),
      imagePath: new FormControl(this.recipe.imagePath),
    });

  }

  ngOnDestroy(): void {
    this.recipeRouteSubscription.unsubscribe();
  }


}