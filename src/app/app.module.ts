import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

//services
import { PhotosService } from './services/photos.service';
import { AuthService } from './services/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { PopupLogoutComponent } from './popup-logout/popup-logout.component';

import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    PhotosDetailComponent,
    PopupLogoutComponent,
    
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [PhotosService,AuthService,BnNgIdleService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
