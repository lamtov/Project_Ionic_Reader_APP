import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(public http: Http) {
    console.log('Hello Authentication Provider');
  }

  getLinkFileBackground(linkFileBackground: String): String {
    var result = "assets/image/background/" + linkFileBackground;
    return result;
  }

  getLinkFileCategory(linkFileCategory: String): String {
    var result = "assets/image/category/" + linkFileCategory;
    return result;
  }

  getLinkFileLesson(linkFileLesson: String): String {
    var result = "assets/image/lesson/" + linkFileLesson;
    return result;
  }

}


