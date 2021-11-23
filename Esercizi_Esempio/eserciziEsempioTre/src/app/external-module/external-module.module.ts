import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PeoplePageComponent } from './people-page/people-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

export const routes: Routes = [
  {path:'people', component: PeoplePageComponent},
  {path:'food', component: FoodPageComponent},
  {path:'departments', component: DepartmentListComponent},
  {path:'departments/:id', component: DepartmentDetailComponent}
]

@NgModule({
  declarations: [
    PeoplePageComponent,
    FoodPageComponent,
    DepartmentListComponent,
    DepartmentDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    PeoplePageComponent,
    FoodPageComponent
  ]

})
export class ExternalModuleModule { }
