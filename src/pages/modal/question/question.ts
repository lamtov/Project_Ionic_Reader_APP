import {Component, OnInit} from '@angular/core';
import {Platform, ViewController, NavController, NavParams} from 'ionic-angular';

import {ImageService} from "../../../providers/image-service";
import {SettingsPage} from "../../main/settings/settings";

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage implements OnInit {

  bg_image_question;

  constructor( public platform: Platform, public viewCtrl: ViewController, public navCtrl: NavController,
               public navParams: NavParams, public imageService: ImageService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  ngOnInit(): void {
    this.bg_image_question = this.imageService.getImageXHDPIV4("flags_bg.png");
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
