import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './service/authentication.guard';


const routes: Routes = [
  /**Other Match navigate page */
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent,
    children: [{ path: 'anasayfa', component: HomeComponent }]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
