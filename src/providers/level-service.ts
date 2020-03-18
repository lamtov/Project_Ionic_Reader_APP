import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {IconsLevel} from "../mock_datas/Level";

@Injectable()
export class LevelService {

  constructor(public http: Http) {
    console.log('Hello LevelService Provider');
  }

  getIconsLevel() {
    let iconLevel = [];
    IconsLevel.map(function (item) {
      let newItem = {
        id: item.id,
        url_level: item.url_level,
        lock: item.lock,
        star: item.star,
        url_star: item.url_star
      };
      iconLevel.push(newItem);
    });
    for (let i = 0; i < iconLevel.length; i++) {
      if (!iconLevel[i].lock) {
        iconLevel[i].url_level += "anml_" + (iconLevel[i].id * 2 - 1) + ".png";
      } else {
        iconLevel[i].url_level += "anml_" + (iconLevel[i].id * 2) + ".png";
      }
    }
    return iconLevel;
  }

  getIcon(urlTemp: string) {
    return "assets/image/drawable-xhdpi-v4/" + urlTemp;
  }

}
