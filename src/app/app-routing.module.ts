import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './service/authentication.guard';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';


const routes: Routes = [
  /**Other Match navigate page */
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent,
    children: [{ path: 'anasayfa', component: HomeComponent }]
  },
  { path: 'shopping-list', canActivate: [AuthenticationGuard], component: ShoppingListComponent },
  { path: 'recipe', canActivate: [AuthenticationGuard], component: RecipesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
