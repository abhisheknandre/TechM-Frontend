import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { VehicleserviceService } from './vehicleservice.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(VehicleserviceService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    const role = authService.getUserRole();
    if (role === 'ADMIN' || role === 'SERVICEADVISOR') {
      return true;
    } else {
      
      router.navigate(['/login']);
      return false;
    }
  } else {
    // Redirect to login or another page
    router.navigate(['/login']);
    return false;
  }
};
