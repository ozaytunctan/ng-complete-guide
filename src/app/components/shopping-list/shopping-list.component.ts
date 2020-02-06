import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Ingredient} from 'src/app/model/ingredient.model';
import {ShoppingListService} from 'src/app/service/shopping-list.service';
import {Subscription} from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Recipe} from '../../model/recipe.model';
import {RecipeService} from '../../service/recipe.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {


    ingredients: Ingredient[] = [];

    igChangeSub: Subscription;

    displayedColumns: string[] = ['id', 'name', 'description', 'imagePath','process'];

    dataSource: MatTableDataSource<Recipe>=new MatTableDataSource<Recipe>([]);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    filterByName: any;

    data:Recipe []=[];


    constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
    }

    ngOnInit() {
       this.data= this.recipeService.getRecipes();
        this.dataSource = new MatTableDataSource<Recipe>(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;


        this.ingredients = this.shoppingListService.getIngredients();

        this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
            (recivedIngredients: Ingredient[]) => {
                this.ingredients = recivedIngredients;
            });

    }

    onEditItem(id: number) {
        this.shoppingListService.nextEditIgredient(id);
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }

    public applyFilter(filterStr:any,propName:any) {
        if (filterStr == undefined || filterStr == '') {
            this.dataSource.data=this.data;
            return;
        }
      this.dataSource.data=  this.dataSource.data.filter(item=>item[propName].toLowerCase().indexOf(filterStr.toLowerCase()) >= 0);

    }
}
