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

const routes: Routes = [
  {path: 'adminDashboard', component:AdmindashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'add-vehicles',component:AddvehicleComponent},
  {path:'vehicle-list',component:VehicleListComponent},
  {path:'update-vehicle/:id',component:UpdateVehicleComponent},
  {path:'item',component:ItemComponent},
  {path:'update-item/:id',component:UpdateItemComponent},
  {path:'under-service', component: VehicleUnderserviceComponent},
  {path:'upadte-status/:id', component: UpdateStatusComponent},
  {path:'additem',component: AddItemComponent},
  {path:'service-done', component: VehicleServiceDoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
