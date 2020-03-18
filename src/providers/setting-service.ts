/**
 * Created by ThieuNv on 3/22/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Setting} from "../models/setting";

@Injectable()
export class SettingService {

  private url: string = "assets/image/drawable-xhdpi-v4/";

  constructor(public http: Http) {
    console.log('Hello SettingService Provider');
  }

  iconSettings: Setting =
    {
      music: true,url_music_text: this.url , url_music_state: this.url,
      sound: false, url_sound_text: this.url , url_sound_state: this.url,
      vibration: false, url_vibration_text: this.url , url_vibration_state: this.url
    };

  setMusic(music: boolean) {
    this.iconSettings.music = music;
  }
  setSound(sound: boolean) {
    this.iconSettings.sound = sound;
  }
  setVibration(vibration: boolean) {
    this.iconSettings.vibration = vibration;
  }


  getIconSettings(){
    let newItem = {
      music: this.iconSettings.music,
      url_music_text: this.iconSettings.url_music_text,
      url_music_state: this.iconSettings.url_music_state,

      sound: this.iconSettings.sound,
      url_sound_text: this.iconSettings.url_sound_text,
      url_sound_state: this.iconSettings.url_sound_state,

      vibration: this.iconSettings.vibration,
      url_vibration_text: this.iconSettings.url_vibration_text,
      url_vibration_state: this.iconSettings.url_vibration_state
    };

    newItem.url_music_state += this.iconSettings.music ? "music_on_2.png" : "music_off_2.png";
    newItem.url_sound_state += this.iconSettings.sound ? "sound_on_2.png" : "sound_off_2.png";
    newItem.url_vibration_state += this.iconSettings.vibration ? "timer_on_2.png" : "timer_off_2.png";
    return newItem;
  }

  getIcon(urlTemp: string) {
    return "assets/image/drawable-xhdpi-v4/" + urlTemp;
  }
}
