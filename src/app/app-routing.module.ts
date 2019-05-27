import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'navbar', component: NavbarComponent },
{ path: 'login', component: LoginComponent },
{ path: 'photos/:id', component: PhotosDetailComponent, canActivate: [AuthGuard] },
{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
