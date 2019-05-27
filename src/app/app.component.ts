import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BnNgIdleService } from 'bn-ng-idle';
import { AuthService } from './services/auth.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public errorValue;
  constructor(private spinnerService: NgxSpinnerService,private bnIdle: BnNgIdleService,
                private method:AuthService,private route: ActivatedRoute,private router: Router){
    this.bnIdle.startWatching(50).subscribe((res) => {
      if(res) {
        method.userLogout();
        this.router.navigate(['/login'], { queryParams: { warningSession: 'true' } });
          console.log("session expired");
      }
    })
  }


  ngOnInit() {
    this.errorValue = this.route.snapshot.queryParamMap.get("error");
    this.spinner();
  }
 spinner():void{
   this.spinnerService.show();
   setTimeout(() =>{
     this.spinnerService.hide();
   },10000);
 }
}
