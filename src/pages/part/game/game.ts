import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ImageService} from "../../../providers/image-service";
import {LessonPage} from "../../lesson/lesson";

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  level:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private imageService:ImageService,public viewCtrl: ViewController) {
    this.level = navParams.get("number");
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  onClickBack(){
    this.navCtrl.push(LessonPage, {level: this.level,numberSlide:2});
    this.viewCtrl.dismiss();
  }
}
