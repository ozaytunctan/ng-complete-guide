import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onAddRecipeItem() {
    debugger;
    this.router
        .navigate(['new-recipe'], { relativeTo: this.route});
  }




}
