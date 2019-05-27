import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { CanActivate, Router } from '@angular/router';
import { PhotosInterface } from '../models/photo-interface';
import '../../assets/js/photos.component.js';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PhotosComponent implements OnInit {
  public photos;
  p: number = 1;
  isSingleClick: Boolean = true;
  public errorValue;
  private name: string;
  private title: string;
  constructor(private dataApi: PhotosService, private router: Router, private modalService: NgbModal, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.name;
    this.title;
    this.errorValue = this.route.snapshot.queryParamMap.get("error");
    this.dataApi.getAllPhotos().subscribe(
      result => {
        this.photos = result;

        if (!this.photos) {
          console.log("error");
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  open(modal, src, title) {
    this.isSingleClick = true;
    setTimeout(() => {
      if (this.isSingleClick) {
        const modalRef = this.modalService.open(modal);
        this.name = src;
        this.title = title;
      }
    }, 250)


  }

  method2CallForDblClick(id: PhotosInterface) {
    this.isSingleClick = false;
    console.log(id);
    this.doTheStuffDblClickHere(id);
  }
  doTheStuffDblClickHere(id: PhotosInterface) {
    this.router.navigate(['/photos/' + id]);
  }

}