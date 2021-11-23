import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PeoplePageComponent } from './external-module/people-page/people-page.component';
import { FoodPageComponent } from './external-module/food-page/food-page.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'}, //!= pathMatch: 'prefix'
  {path:'home', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
