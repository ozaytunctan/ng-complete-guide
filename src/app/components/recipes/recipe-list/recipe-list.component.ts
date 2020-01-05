import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Navigation } from 'selenium-webdriver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];

  recipesChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();

    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipeList: Recipe[]) => {
      this.recipes = recipeList;
    });

  }

  onAddRecipeItem() {
    this.router
      .navigate(['new-recipe'], { relativeTo: this.route });
  }


  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();

  }

}
