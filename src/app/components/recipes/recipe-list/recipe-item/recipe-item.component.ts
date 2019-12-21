import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input ("recipe-item") recipe: Recipe;

  @Output() recipeSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.recipeSelected.emit();
  }

}
