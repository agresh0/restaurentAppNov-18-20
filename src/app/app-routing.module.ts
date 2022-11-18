import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { DeleteRestaurentComponent } from './delete-restaurent/delete-restaurent.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { UpdatesRestaurentComponent } from './updates-restaurent/updates-restaurent.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';

  // Defining path for each component

const routes: Routes = [
  // RestaurentListComponent
  {
    path:'',component:RestaurentListComponent
  },
  // ViewRestaurentComponent
  {
    path:'view-restaurent/:id',component:ViewRestaurentComponent
  },
  // AddRestaurentComponent
  {
    path:'add-restaurent',component:AddRestaurentComponent

  },
  // UpdatesRestaurentComponent
  {
    path:'updates-restaurent/:id',component:UpdatesRestaurentComponent
  },
  // DeleteRestaurentComponent
  {
    path:'delete-restaurent/: id',component:DeleteRestaurentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
