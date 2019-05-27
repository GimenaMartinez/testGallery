import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { PhotosInterface } from 'src/app/models/photo-interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllPhotos(){
    const url = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get(url);
  }

  getOnlyPhoto(id){
    const url = "https://jsonplaceholder.typicode.com/photos/"+id;
    return this.http.get(url);
  }
}
