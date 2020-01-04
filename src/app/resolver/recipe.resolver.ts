import { Recipe } from '../model/recipe.model';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    ActivatedRoute,
    Params
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../service/recipe.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeResolver implements Resolve<Recipe>{

    recipe: Recipe;

    constructor(private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        let recipeId: number = +route.params['id'];
        if (!recipeId)
            this.recipe = this.recipeService.getRecipe(recipeId);
        return this.recipe;
    }

}