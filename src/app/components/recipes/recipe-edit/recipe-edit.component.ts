import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {


  id: number;

  editRecipeForm: FormGroup;

  editMode: boolean = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {
  //  this.formBuilder = this.fb;
  }

  ngOnInit() {
    this.loadRecipe();
    
  }

  loadRecipe() {
    this.route
      .params.subscribe((params:Params) => {
        let id:number=params['id'];
        this.initializeForm(this.recipeService.getRecipe(id));
      });
  }

  initializeForm(recipe:Recipe) {
    if (!recipe)
      recipe = new Recipe("", "", "", []);

    this.editRecipeForm = this.fb.group({
      
      name: new FormControl(recipe.name, [Validators.required]),
     
      description: [recipe.description, [Validators.required]],
     
      imagePath: [recipe.imagePath, [Validators.required]]
    });
  }

  onAddRecipe(){

  

  }
}