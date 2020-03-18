import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import { WordSplit } from '../../../models/word_split';
import {WordSplitService} from "../../../providers/word-split-service";
import {AudioPlayer} from "../../../providers/audio";
import {Split} from "../../../models/split";
import {Word} from "../../../models/word";
import {LessonPage} from "../../lesson/lesson";
import {ImageService} from "../../../providers/image-service";

/*
  Generated class for the WordSplit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-word-split',
  templateUrl: 'word-split.html'
})
export class WordSplitPage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  @ViewChild(Slides) slides: Slides;
  words: WordSplit[];
  active: number = -1;
  allActive: number = -1;
  index: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wordSplitService: WordSplitService, private audio: AudioPlayer,public viewCtrl: ViewController, private imageService:ImageService) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
    this.words = wordSplitService.getAllData();
    this.audio.getAudio().src = 'assets/sound/' + this.words[0].filename + '.mp3';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordSplitPage');
    this.playSplitSequence();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.audio.getAudio().src = 'assets/sound/' + this.words[currentIndex].filename + '.mp3';
    this.playSplitSequence();
  }

  slideWillChange() {
    this.active = -1;
    if(this.slides.isEnd()) {
      this.slides.slideTo(0, 500);
    }
  }

  playSplit(split: Split) {
    this.active = split.id;
    this.audio.playSplit(split);
  }
  getID(word:WordSplit,number:number){
    return word.id+"Word"+number;
  }
    getWidth(word:WordSplit) {
      // var a= document.getElementById("1Word0").offsetWidth;var b=  document.getElementById("1Word0").offsetWidth;
   var a= 0;var b=0;
    return  (a+b)+"px";
  }
  playSplitSequence() {
    let currentIndex = this.slides.getActiveIndex() || 0;
    let audio = this.audio.getAudio();
    let split = this.words[currentIndex].wordsSplit[this.index];
    let word = this.words[currentIndex];

    audio.currentTime = split.start;
    this.active = split.id;
    audio.play();

    audio.ontimeupdate = () => {
      if(split && audio.currentTime >= split.start + split.duration) {
        audio.pause();
        this.index++;
        // this.playSplit(this.words[currentIndex].wordsSplit[this.index]);
        if(this.index < this.words[currentIndex].wordsSplit.length) {
          this.playSplitSequence();
        } else {
          this.allActive = 1;
          this.audio.playPartial(word.start, word.duration);
          this.index = 0;
          setTimeout(() => {
            this.allActive = -1;
            this.active = -1;
          }, 1000);
        }
      }
    };
  }
  onClickBack(){
    this.navCtrl.push(LessonPage, {level: 1,numberSlide:7});
    this.viewCtrl.dismiss();
  }
}
