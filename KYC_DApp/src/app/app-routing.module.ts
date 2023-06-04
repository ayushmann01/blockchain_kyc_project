import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  {path: "newCustomer", component: NewCustomerComponent},
  {path: "**", redirectTo: "newCustomer", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
