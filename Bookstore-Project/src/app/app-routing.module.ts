import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditComponent } from './components/edit/edit.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  {path:"",component: DashboardComponent},
  {path:"orders",component: OrdersComponent},
  {path:"productlist",component: ProductlistComponent},
  {path:"add",component: AddComponent},
  {path:"edit/:id",component: EditComponent},
  {path:"orderlist",component: OrderlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
