import { Subscription, Observable, interval } from 'rxjs';
import { RecipeService } from './recipe.service';
import { Recipe } from '../model/recipe.model';
import { OnInit, Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class ServiceAsync implements OnInit{
 


    public listenSeatHold:Observable<Recipe[]>;

    constructor(private recipeService:RecipeService){
        this.seatHoldAsync();
    }



    seatHoldAsync(){
        this.listenSeatHold=Observable.create(observer=>{
           setInterval(()=>{
           let recipes:Recipe[]= this.recipeService.getRecipes();
           observer.next(recipes);
           },1000);
        });
    }

    ngOnInit(): void {
     
 
        // this.listenSeatHold.subscribe(response=>{
        //    console.log(response);
        // },
        // error=>{

        // },
        // ()=>{

        // }
        
        // );


    }


}