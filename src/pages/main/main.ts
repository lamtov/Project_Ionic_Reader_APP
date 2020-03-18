import {Component, OnInit, trigger, transition, keyframes, style, animate} from '@angular/core';
import {NavParams, ModalController, NavController} from 'ionic-angular';
import {ImageService} from "../../providers/image-service";
import {QuestionPage} from "../modal/question/question";
import {LevelPage} from "./level/level";
import {SharePage} from "../modal/share/share";
import {RatePage} from "../modal/rate/rate";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  animations: [
    trigger('bounceInAnimation', [
      transition('* => bounceIn', [
        animate("1000ms", keyframes([
          style({opacity: 0.95, transform: 'scale3d(.9, .9, .9)', offset: 0}),
          style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
          style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
          style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
          style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
          style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
      ]),
      transition('bounceIn => void, * => bounceOut', [
        animate("1000ms", keyframes([
          style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
          style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
          style({opacity: 1, transform: 'scale3d(.8, .8, .8)', offset: 1}),
        ]))
      ]),
    ])
  ]
})
export class MainPage implements OnInit {
  bounceInState:string;
  bg_main: string;
  icon_title_main: string;
  icon_title_main_2: string;
  icon_country_main: string;
  icon_play_main: string;
  icon_settings_main: string;
  icon_share_main: string;
  icon_rate_main: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public imageService: ImageService, public modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.bg_main = this.imageService.getImageXHDPIV4("bg_3.png");
    this.icon_title_main = this.imageService.getImageXHDPIV4("brillkids_2.png");
    this.icon_title_main_2 = this.imageService.getImageXHDPIV4("reader_2.png");
    this.icon_country_main = this.imageService.getImageXHDPIV4("flag_en.png");
    this.icon_play_main = this.imageService.getImageXHDPIV4("play_2.png");
    this.icon_settings_main = this.imageService.getImageXHDPIV4("settings_2.png");
    this.icon_share_main = this.imageService.getImageXHDPIV4("icon_share_1.png");
    this.icon_rate_main = this.imageService.getImageXHDPIV4("icon_rate_1.png");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.bounceInState="bounceIn";
  }

  goToSettings() {
    let modal = this.modalCtrl.create(QuestionPage);
    modal.present();
  }
  goToLevel() {
    this.navCtrl.push(LevelPage);
  }
  goToShare() {
    let modal = this.modalCtrl.create(SharePage);
    modal.present();
  }
  goToRate() {
    let modal = this.modalCtrl.create(RatePage);
    modal.present();
  }
  animationDone(){
    this.bounceInState=="bounceIn"?this.bounceInState="bounceOut":this.bounceInState="bounceIn";
  }
}
