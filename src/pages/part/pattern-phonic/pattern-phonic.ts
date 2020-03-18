import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import {PatternPhonicService} from "../../../providers/pattern-phonic-service";
import {AudioPlayer} from "../../../providers/audio";
import {OptionService} from "../../../providers/option-service";
import {PatternPhonic2Page} from "../pattern-phonic2/pattern-phonic2";
import {LessonPage} from "../../lesson/lesson";
import {ImageService} from "../../../providers/image-service";

/*
  Generated class for the PatternPhonic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pattern-phonic',
  templateUrl: 'pattern-phonic.html'
})
export class PatternPhonicPage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  level:number;
  @ViewChild(Slides) slides: Slides;
    firstItem: {text: String, fileAudioName: String,color:String};
    items: Array<{id: number, textFirst: String,textSecond:String, filename: String}>;
  colorFirst:String;
    colorSecond:String;
    constructor(public navCtrl: NavController, public navParams: NavParams, private patternphonic: PatternPhonicService, private audio: AudioPlayer, private option: OptionService,public viewCtrl: ViewController, private imageService:ImageService) {
      this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
      this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
      this.back_img = imageService.getImageXHDPIV4("back.png");
      this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
      this.colorFirst =option.getRandomColor();
      this.colorSecond = option.getRandomColor();
      this.firstItem = {text: "MÔ HÌNH NGỮ ÂM", fileAudioName: "title-pattern-phonics",color:this.colorFirst}
      this.level = navParams.get("number");
      this.items = [];
      var data =patternphonic.getDataOfLevel(this.level);
      var number = data[0].text.length;
      data.map(item => {
        this.items.push({
          id: item.id,
          textFirst: item.text.slice(0,number),
          textSecond:item.text.slice(number,item.text.length),
          filename: (item.id>=2) ?patternphonic.getWordLink(item.filename):item.filename
        })
      });

      this.audio.playOne(this.option.getLinkFileAudio(this.firstItem.fileAudioName));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SighWordsPage');
    this.slides.autoplay=1500;
    this.slides.startAutoplay();
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex===0){
      this.audio.playOne(this.option.getLinkFileAudio(this.firstItem.fileAudioName));
    }else if(currentIndex<this.items.length+1){
      console.log(this.items[0]);
      this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].filename));
    }

    if(currentIndex == this.items.length) {
      this.navCtrl.push(PatternPhonic2Page,this.level);
      this.viewCtrl.dismiss();
    }
  }

  slideTap() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex===0){
      this.audio.playOne(this.firstItem.fileAudioName);
    }else if(currentIndex<this.items.length+1){
      this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].filename));
    }

    if(currentIndex == this.items.length) {
      this.navCtrl.push(PatternPhonic2Page,this.level);
      this.viewCtrl.dismiss();
    }
  }
  end(){
    this.slides.stopAutoplay();
  }

  slidePre() {
    this.slides.slidePrev();
  }

  onClickBack(){
    this.navCtrl.push(LessonPage, {level: this.level,numberSlide:5});
    this.viewCtrl.dismiss();
  }
}
