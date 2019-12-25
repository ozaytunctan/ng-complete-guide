import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './service/authentication.guard';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';


const routes: Routes = [
  /**Other Match navigate page */

  { path: '', redirectTo: "/recipes", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    component: HomeComponent,
    children: [
      { path: 'anasayfa', component: HomeComponent }
    ]
  },
  { path: 'shopping-list', canActivate: [AuthenticationGuard], component: ShoppingListComponent },

  {
    path: 'recipes', canActivate: [AuthenticationGuard], component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]

  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
