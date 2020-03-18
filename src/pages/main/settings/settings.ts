/**
 * Created by ThieuNv on 3/22/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {SettingService} from "../../../providers/setting-service";
import {OptionService} from "../../../providers/option-service";
import {Setting} from "../../../models/setting";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  // Object setting
  iconSettings: Setting;

  // Image, icon and background
  bg_image_settings;
  icon_title_settings;
  icon_back_settings;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private settingService: SettingService, private optionService: OptionService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewDidEnter() {
    this.optionService.setVoice("-woman");
  }

  ngOnInit(): void {
    this.iconSettings = this.settingService.getIconSettings();

    this.bg_image_settings = this.settingService.getIcon("settings_bg_2.png");
    this.icon_title_settings = this.settingService.getIcon("settings_title.png");
    this.icon_back_settings = this.settingService.getIcon("back.png");
  }

  setSettings(name: string) {
    switch(name) {
      case "music":
        this.settingService.setMusic(!this.iconSettings.music);
        break;
      case "sound":
        this.settingService.setSound(!this.iconSettings.sound);
        break;
      case "vibration":
        this.settingService.setVibration(!this.iconSettings.vibration);
        break;
      default:
        break;
    }
    this.iconSettings = this.settingService.getIconSettings();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
