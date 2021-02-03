import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CustomersModule } from './customers/customers.module';

const appRotes:Routes=[
  {path:"customer",loadChildren:'./customers/customers.module#CustomersModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRotes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
