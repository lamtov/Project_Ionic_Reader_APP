import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  constructor(public http: Http) {
    console.log('Hello ImagesService Provider');
  }

  getImageWelcome(image: string): string {
    return "assets/image/authentication/" + image;
  }
  getImageSignIn(image: string): string {
    return "assets/image/authentication/" + image;
  }
  getImageSignUp(image: string): string {
    return "assets/image/authentication/" + image;
  }

  getImageBackground(image: string) : string {
    return "assets/image/background/" + image;
  }

  getImageGif(image: string) : string {
    return "assets/image/gif/" + image;
  }

  getImageXHDPI(image: string): string {
    return "assets/image/drawable-xhdpi/" + image;
  }

  getImageXHDPIV4(image: string): string {
    return "assets/image/drawable-xhdpi-v4/" + image;
  }
}



