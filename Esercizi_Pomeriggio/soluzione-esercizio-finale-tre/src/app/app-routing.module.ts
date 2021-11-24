import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonDetailPageComponent } from './person-detail-page/person-detail-page.component';


const routes:Routes =[
  {path:"", redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomePageComponent},
  {path:'people', component: PeoplePageComponent},
  {path:'food', component: FoodPageComponent},
  {path:'person/:id', component: PersonDetailPageComponent},
  {path:"**", component: ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
