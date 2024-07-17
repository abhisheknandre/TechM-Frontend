import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ItemComponent } from './components/item/item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { VehicleUnderserviceComponent } from './components/vehicle-underservice/vehicle-underservice.component';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { VehicleServiceDoneComponent } from './components/vehicle-service-done/vehicle-service-done.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { authGuard } from '../../auth.guard';

const routes: Routes = [
  {path: 'adminDashboard', component:AdmindashboardComponent, canActivate:[authGuard]}, 
  {path:'dashboard', component:DashboardComponent , canActivate:[authGuard]},
  {path:'add-vehicles',component:AddvehicleComponent , canActivate:[authGuard]},
  {path:'vehicle-list',component:VehicleListComponent, canActivate:[authGuard]},
  {path:'update-vehicle/:id',component:UpdateVehicleComponent, canActivate:[authGuard]},
  {path:'item',component:ItemComponent, canActivate:[authGuard]},
  {path:'update-item/:id',component:UpdateItemComponent, canActivate:[authGuard]},
  {path:'under-service', component: VehicleUnderserviceComponent, canActivate:[authGuard]},
  {path:'upadte-status/:id', component: UpdateStatusComponent, canActivate:[authGuard]},
  {path:'additem',component: AddItemComponent, canActivate:[authGuard]},
  {path:'service-done', component: VehicleServiceDoneComponent, canActivate:[authGuard]},
  {path:'invoice/:id', component: InvoiceComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
