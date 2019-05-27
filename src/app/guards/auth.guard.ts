import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private modalService: NgbModal) { }
  public popup;
  canActivate() {
    if (this.authService.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { error: 'true' } });
      this.router.navigate(['/home'], { queryParams: { error: 'true' } });

      return false;
    }
  }

}