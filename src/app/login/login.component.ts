import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInterface } from '../models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public warningSession;
  constructor(private authServices: AuthService, private router: Router,private route: ActivatedRoute) { }
  private user: UserInterface = {
    email: ''
  }

  ngOnInit() {
    this.warningSession = this.route.snapshot.queryParamMap.get("warningSession");
   }

  onLogin() {
    return this.authServices.loginUser(this.user.email).subscribe(
      data => {
        var userData = JSON.parse(data)[0];
        this.authServices.setUser(userData.name)
        this.authServices.setToken(userData.id);
        this.router.navigate(["/"]);
      },
      error => console.log(error)
    )
  }
}
