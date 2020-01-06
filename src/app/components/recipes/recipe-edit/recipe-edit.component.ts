import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { Subscription, from } from 'rxjs';
import { CustomValidators } from 'src/app/validators/custom.validators';

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
    private router: Router,
    private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.initForm();
    this.recipeRouteSubscription = this.route
      .params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = true;
        this.recipe = this.recipeService.getRecipe(this.id);
        this.initForm();
      });


  }
  
  initForm() {
    var recipeName = '';
    var recipeImagePath = '';
    var recipeDescription = '';
    var recipeIngredients = new FormArray([]);

    if (this.editMode && this.id >= 0) {
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      if (this.recipe.ingredients) {
        for (let igr of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(igr.name, [Validators.required]),
              'amount': new FormControl(igr.amount, [Validators.required, Validators.pattern("^[0-9]+[0-9]*$")])
            }));
        }
      }
    }


    this.editRecipeForm = this.fb.group({
      'name': new FormControl(recipeName, [Validators.required, CustomValidators.existsRecipeNameValid]),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath),
      'ingredients': recipeIngredients
    });

  }

  onSubmit() {
    var recipeValue = this.editRecipeForm.value;
    const newRecipe = new Recipe(
      recipeValue.name,
      recipeValue.description,
      recipeValue.imagePath,
      recipeValue.ingredients
    );
    if (this.editMode && this.id >= 0) {
      //updated
      this.recipeService.updateRecipe(this.id, newRecipe);
    }
    else {
      //insert
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  ngOnDestroy(): void {
    this.recipeRouteSubscription.unsubscribe();
  }

  onAddIngredients() {
    (<FormArray>this.editRecipeForm.get("ingredients")).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [Validators.required, Validators.pattern("^[0-9]+[0-9]*$")])
      })
    );
  }
  onIngredientDelete(id: number) {
    (<FormArray>this.editRecipeForm.get("ingredients")).removeAt(id);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }


}