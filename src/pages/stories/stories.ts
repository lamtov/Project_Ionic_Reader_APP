import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import { StoryPage } from '../story/story';
import { StoryService } from '../../providers/story-service';
import {ImageService} from "../../providers/image-service";
import {LessonPage} from "../lesson/lesson";
/*
  Generated class for the Stories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html'
})
export class StoriesPage {

  stories: string[];
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: StoryService,public viewCtrl: ViewController, private imageService:ImageService) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
    this.stories = service.getStoriesName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesPage');
  }

  playStory(index: number) {
    this.navCtrl.push(StoryPage, { id: index });
  }
  onClickBack(){
    this.navCtrl.push(LessonPage, {level: 1,numberSlide:9});
    this.viewCtrl.dismiss();
  }
}
