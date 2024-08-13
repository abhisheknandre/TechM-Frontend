import { Component, OnInit } from '@angular/core';
import { VehicleserviceService } from '../../vehicleservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginError: boolean = false; // Add this property to track login error

  constructor(private authService: VehicleserviceService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined' && window.localStorage) {
      let token = localStorage.getItem('token');
      let role = localStorage.getItem('userRole');
      if (token) {
        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard/dashboard']);
        } else if (role === 'SERVICEADVISOR') {
          this.router.navigate(['/advisor-dashboard/advisorDashboard/advisorvehicle']);
        }
      }
    }
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('done');
        // Store user details in localStorage only if successful login
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('userRole', response.role);
        localStorage.setItem('userName', response.name);
        localStorage.setItem('userEmail', response.email);
        console.log(response.jwt, response.role);
        console.log(response);

        const userRole = response.role;
        if (userRole === 'ADMIN') {
          this.toastr.success('Login successfully', '');
          this.router.navigate(['/admin-dashboard/dashboard']);
          console.log('admin');
        } else if (userRole === 'SERVICEADVISOR') {
          this.toastr.success('Login successfully', '');
          this.router.navigate(['/advisor-dashboard/advisorDashboard/advisorvehicle']);
          console.log('service');
        } else {
          // Handle invalid role or other error cases
          console.error('Invalid role received:', userRole);
          this.toastr.error('Invalid role received', 'Login Error');
        }
        this.loginError = false; // Reset login error on successful login
      }
    );
  }
}
