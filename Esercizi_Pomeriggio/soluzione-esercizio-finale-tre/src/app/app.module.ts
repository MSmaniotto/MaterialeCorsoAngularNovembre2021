import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonDetailPageComponent } from './person-detail-page/person-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent,
    HomePageComponent,
    PeoplePageComponent,
    ErrorPageComponent,
    PersonDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
