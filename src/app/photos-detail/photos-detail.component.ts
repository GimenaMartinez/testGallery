import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.css']
})
export class PhotosDetailComponent implements OnInit {
  public photo;
  public onlyPhoto;
  constructor(private dataApi: PhotosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.onlyPhoto = this.route.snapshot.paramMap.get("id");
    this.dataApi.getOnlyPhoto(this.onlyPhoto).subscribe(
      result => {
          this.photo = result;
          console.log(result);
          if(!this.photo){
              console.log("error");
          }
      },
      error =>{
          var errorMessage = <any>error;
          console.log(errorMessage);
      }
  );
  }

}
