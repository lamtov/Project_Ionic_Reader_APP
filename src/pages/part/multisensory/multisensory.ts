import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {MultisensoryService} from "../../../providers/multisensory-service";
import {AudioPlayer} from "../../../providers/audio";
import {OptionService} from "../../../providers/option-service";
import {Slides} from 'ionic-angular';
import {ImageService} from "../../../providers/image-service";
import {PatternPhonicPage} from "../pattern-phonic/pattern-phonic";
import {LessonPage} from "../../lesson/lesson";

@Component({
  selector: 'page-multisensory',
  templateUrl: 'multisensory.html'
})
export class MultisensoryPage {
  @ViewChild(Slides) slides: Slides;
  level: number;
  firstItem: {text: String, fileAudioName: String};
  secondItem: {text: String, fileAudioName: String};
  items: Array<{id: number, text: String, audioword: String, picture: String, audiopicture: String}>;

  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private multisensory: MultisensoryService, private audio: AudioPlayer,
              private option: OptionService,  private imageService:ImageService,public viewCtrl: ViewController) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");

    this.level = navParams.get("number");
    var datas = multisensory.getDataOfLevel(this.level);
    this.firstItem = {text: "Đa giác quan", fileAudioName: "bk-hn-title-multisesory-man.mp3"};
    this.secondItem = {text: datas[0].text, fileAudioName: datas[0].filename};
    this.items = [];
    datas.map((data, index) => {
      if (index != 0) {
        this.items.push({
          id: index,
          text: data.text,
          audioword: multisensory.getWordLink(data.filename),
          picture: option.getLinkFileImage(multisensory.getPictureLink(data.filename)),
          audiopicture: multisensory.getPictureAudioLink(data.filename)
        })
      }
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultisensoryPage');
    this.audio.playOne(this.firstItem.fileAudioName);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex === 0) {
      this.audio.playOne(this.firstItem.fileAudioName);
    } else if (currentIndex === 1) {
      this.audio.playOne(this.option.getLinkFileAudio(this.secondItem.fileAudioName));
    } else if (currentIndex < this.items.length * 3 + 2) {
      var i = Math.floor((currentIndex - 2) / 3);
      var j = (currentIndex - 2) % 3;
      if (j === 0 || j === 2) {
        this.audio.playOne(this.option.getLinkFileAudio(this.items[i].audioword));
      } else {
        this.audio.playOne(this.option.getLinkFileAudio(this.items[i].audiopicture));
      }
    }
    if(currentIndex == this.items.length * 3 + 2) {
      this.navCtrl.push(PatternPhonicPage,{number: this.level});
      this.viewCtrl.dismiss();
    }
  }

  slideDrag() {

  }

  slideDoubleTap() {
    this.slides.slideNext();

  }

  slideTap() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex === 0) {
      this.audio.playOne(this.firstItem.fileAudioName);
    } else if (currentIndex === 1) {
      this.audio.playOne(this.option.getLinkFileAudio(this.secondItem.fileAudioName));
    } else if (currentIndex < this.items.length * 3 + 2) {
      var i = Math.floor((currentIndex - 2) / 3);
      var j = (currentIndex - 2) % 3;
      if (j === 0 || j === 2) {
        this.audio.playOne(this.option.getLinkFileAudio(this.items[i].audioword));
      } else {
        this.audio.playOne(this.option.getLinkFileAudio(this.items[i].audiopicture));
      }
    }
    if(currentIndex == this.items.length * 3 + 2) {
      this.navCtrl.push(PatternPhonicPage,{number: this.level});
      this.viewCtrl.dismiss();
    }
  };


  onClickBack(){
    this.navCtrl.push(LessonPage, {level: this.level,numberSlide:2});
    this.viewCtrl.dismiss();
  }

  slideNext() {
    if (this.slides.getActiveIndex() == this.items.length * 3 + 2) {
      this.navCtrl.push(PatternPhonicPage, {number: this.level});
    } else {
      this.slides.slideNext();
    }
  }

  slidePre() {
    this.slides.slidePrev();
  }

  end(){
    this.slides.stopAutoplay();
  }
}


