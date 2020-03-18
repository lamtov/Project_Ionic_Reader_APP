import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import {SightWordsService} from "../../../providers/sight-words-service";
import {AudioPlayer} from "../../../providers/audio";
import {OptionService} from "../../../providers/option-service";
import {StoriesPage} from "../../stories/stories";
import {LessonPage} from "../../lesson/lesson";
import {ImageService} from "../../../providers/image-service";

/*
 Generated class for the SighWords page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-sigh-words',
  templateUrl: 'sigh-words.html'
})
export class SighWordsPage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  @ViewChild(Slides) slides: Slides;
  level: number;
  firstItem: {text: String, fileAudioName: String,color:String};
  items: Array<{id: number, text: String, filename: String,color:String}>;
  isPlaying: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sightwords: SightWordsService, private audio: AudioPlayer, private option: OptionService,public viewCtrl: ViewController, private imageService:ImageService) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
    this.firstItem = {text: "TỪ THÔNG DỤNG", fileAudioName: "bk-hn-title-sight-words-child.mp3",color:option.getRandomColor()}
    this.level = navParams.get("number");
    this.items = [];
    sightwords.getDataOfLevel(this.level).map(item => {
      this.items.push({
        id: item.id,
        text: item.text,
        filename: item.filename,
        color:option.getRandomColor()
      })

    });

    this.audio.playOne(this.firstItem.fileAudioName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SighWordsPage');
    this.slides.autoplay=1500;
    this.slides.startAutoplay();
  }

  slideChanged() {
    this.playingEvent();
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex===0){
      this.audio.playOne(this.firstItem.fileAudioName);
    }else if(currentIndex<this.items.length+1){
        this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].filename));
    }

    if(currentIndex == this.items.length) {
      this.navCtrl.push(StoriesPage,this.level);
      this.viewCtrl.dismiss();
    }
  }

  slideTap() {
    this.playingEvent();
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex===0){
      this.audio.playOne(this.firstItem.fileAudioName);
    }else if(currentIndex<this.items.length+1){
      this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].filename));
    }

    if(currentIndex == this.items.length) {
      this.navCtrl.push(StoriesPage,this.level);
      this.viewCtrl.dismiss();
    }
  }
  end(){
    this.slides.stopAutoplay();
  }

  slideNext() {
    this.slides.slideNext();
  }

  slidePre() {
    this.slides.slidePrev();
  }

  playingEvent() {
    this.isPlaying = true;
    this.audio.getAudio().onended =  () => {
      this.isPlaying = false;
    }
  }
  onClickBack(){
    this.navCtrl.push(LessonPage, {level: this.level,numberSlide:6});
    this.viewCtrl.dismiss();
  }
}
