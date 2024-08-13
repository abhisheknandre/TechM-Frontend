import { Component } from '@angular/core';
import { Vehicle } from '../../../../vehicle';
import { VehicleserviceService } from '../../../../vehicleservice.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  vehicles: Vehicle[];
  
  constructor(private vehicleservice: VehicleserviceService, private toastr: ToastrService, private router: Router){}

  ngOnInit(): void{
    this.getVehicle();
  }

  private getVehicle(){
    this.vehicleservice.getVehicleList4().subscribe(data =>{
      this.vehicles = data;
      console.log(data)
    });
  }

  updateStatus(id: number){
    this.router.navigate(['admin-dashboard/upadte-status', id])
  }

}
