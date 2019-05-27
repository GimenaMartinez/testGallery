import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }
  canActivateChild() {
    if (this.authService.getCurrentUser()) {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
