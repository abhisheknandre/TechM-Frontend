import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-advisordashboard',
  templateUrl: './advisordashboard.component.html',
  styleUrl: './advisordashboard.component.css'
})
export class AdvisordashboardComponent {

constructor(private router : Router, private toastr: ToastrService){}
logout() {
  this.toastr.success('', "Logout successfully");
  console.log('Destroy');
  localStorage.clear();
  this.router.navigate(['/login'], { replaceUrl: true });
}
  
  
}
