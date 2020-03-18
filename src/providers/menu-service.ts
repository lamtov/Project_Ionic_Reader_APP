/**
 * Created by ThieuNv on 3/21/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {IconsLevel} from "../mock_datas/Level";

@Injectable()
export class MenuService {

  constructor(public http: Http) {
    console.log('Hello MenuService Provider');
  }

  getIconsLevel() {
    let iconLevel = [];
    IconsLevel.map(function (item) {
      let newItem = {
        id: item.id,    // day nay. Moi lan for chay. No la
        url_level: item.url_level,
        lock: item.lock,
        star: item.star,
        url_star: item.url_star
      };
      iconLevel.push(newItem);
    });
    for (let i = 0; i < iconLevel.length; i++) {
      if (iconLevel[i].lock) {
        iconLevel[i].url_level += "lock_level_" + iconLevel[i].id + ".png";
      } else {
        iconLevel[i].url_level += "level_" + iconLevel[i].id + ".png";
      }
      iconLevel[i].url_star += "star_" + iconLevel[i].star + ".png";
    }
    return iconLevel;
  }

  getIcon(urlTemp: string) {
    return "assets/icon/menu/" + urlTemp;
  }
}
