import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AudioPlayer } from '../../providers/audio';
import { WordSplitService } from '../../providers/word-split-service';
import { WordSplit } from '../../models/word_split';
import { Split } from '../../models/split';

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

  @ViewChild(Slides) slides: Slides;
  words: WordSplit[];
  active: number = -1;
  allActive: number = -1;
  index: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wordSplitService: WordSplitService, private audio: AudioPlayer) {
    if(this.navParams.get("listNum") == 1) {
      this.words = wordSplitService.getDataList1Index(this.navParams.get("id"));
    } else {
      this.words = wordSplitService.getDataList2Index(this.navParams.get("id"));
    }
    //this.audio.getAudio().src = 'assets/sound/' + this.words[0].filename + '.mp3';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordSplitPage');
    // this.playSplitSequence();
    this.setEvent(0);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    //this.audio.getAudio().src = 'assets/sound/' + this.words[currentIndex].filename + '.mp3';
    // this.playSplitSequence();

    this.setEvent(currentIndex);
  }

  setEvent(currentIndex: number) {
    this.audio.getAudio().ontimeupdate = () => {
      if(this.audio.getAudio().currentTime < this.words[currentIndex].wordsSplit[0].start + this.words[currentIndex].wordsSplit[0].duration) {
        this.active = this.words[0].wordsSplit[0].id;
      }

      if (this.audio.getAudio().currentTime > this.words[currentIndex].wordsSplit[1].start &&
        this.audio.getAudio().currentTime < this.words[currentIndex].wordsSplit[1].start + this.words[currentIndex].wordsSplit[1].duration) {
        this.active = this.words[0].wordsSplit[1].id;
      }

      if(this.audio.getAudio().currentTime > this.words[currentIndex].start){
        this.active = -1;
        this.allActive = 1;
      }
    };

    this.audio.getAudio().onended = () => {
      this.allActive = -1;
    };

    this.audio.playOne(this.words[currentIndex].filename + '.mp3');
  }

  slideWillChange() {
    this.active = -1;

    if(this.slides.isEnd()) {
      this.navCtrl.pop();
    }
  }

  ionViewWillLeave() {
    this.audio.stopPlay();
  }

  playSplit(split: Split) {
    this.active = split.id;
    this.audio.playSplit(split);
  }

  // playSplitSequence() {
  //   let currentIndex = this.slides.getActiveIndex() || 0;
  //   let audio = this.audio.getAudio();
  //   let split = this.words[currentIndex].wordsSplit[this.index];
  //   let word = this.words[currentIndex];
  //
  //   audio.currentTime = split.start;
  //   this.active = split.id;
  //   audio.play();
  //
  //   audio.ontimeupdate = () => {
  //     if(split && audio.currentTime >= split.start + split.duration) {
  //       audio.pause();
  //       this.index++;
  //       // this.playSplit(this.words[currentIndex].wordsSplit[this.index]);
  //       if(this.index < this.words[currentIndex].wordsSplit.length) {
  //         this.playSplitSequence();
  //       } else {
  //         this.allActive = 1;
  //         this.audio.playPartial(word.start, word.duration);
  //         this.index = 0;
  //         setTimeout(() => {
  //           this.allActive = -1;
  //           this.active = -1;
  //
  //         }, 1000);
  //       }
  //     }
  //   };
  // }
}
