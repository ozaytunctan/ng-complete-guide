import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RecipesComponent} from './components/recipes/recipes.component';
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './components/shopping-list/shopping-edit/shopping-edit.component';
import {RecipeDetailComponent} from './components/recipes/recipe-detail/recipe-detail.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationGuard} from './service/authentication.guard';
import {AuthenticationService} from './service/authentication-service';
import {TextHighLight} from './directive/text-higlight/text-higlight.directive';
import {DropdownDirective} from './directive/dropdown/dropdown.directive';
import {ShowDirective} from './directive/show.directive';
import {RecipeStartComponent} from './components/recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './components/recipes/recipe-edit/recipe-edit.component';
import {RecipeResolver} from './resolver/recipe.resolver';
import {ServiceAsync} from './service/service-async.service';
import {CardComponent} from './components/commons/card/card.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import {FilterPipe} from './pipes/filter-pipe';
import {ShoppingListService} from './service/shopping-list.service';
import {RecipeService} from './service/recipe.service';
import {AuthUserInterceptor} from 'src/interceptors/auth-user.interceptor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatGridListModule
}
from '@angular/material/grid-list';

import {
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule, MatMenuModule, MatSliderModule, MatSlideToggleModule, MatListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogComponent} from './components/shared/confirm-dialog/confirm-dialog.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    TextHighLight,
    ShowDirective,
    DropdownDirective,
    RecipeStartComponent,
    CardComponent,
    ShortenPipe,
    FilterPipe,
    ConfirmDialogComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatListModule,
    MatIconModule


  ],

  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    RecipeResolver,
    ServiceAsync,
    RecipeService,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthUserInterceptor,
      multi: true
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
