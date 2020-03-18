import {PictureFlashService} from '../../../providers/picture-flash-service';
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import {AudioPlayer} from "../../../providers/audio";
import {OptionService} from "../../../providers/option-service";
import {MultisensoryPage} from "../multisensory/multisensory";
import {LessonPage} from "../../lesson/lesson";
import {ImageService} from "../../../providers/image-service";
/*
  Generated class for the PictureFlash page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-picture-flash',
  templateUrl: 'picture-flash.html'
})
export class PictureFlashPage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  level:number;
  items: Array<{id: number, audioUrl: String, pictureUrl: String}>;
  @ViewChild(Slides) slides: Slides;
  isPlaying: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: PictureFlashService, private audio: AudioPlayer, private option: OptionService,public viewCtrl: ViewController, private imageService:ImageService) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
    this.level = navParams.get("number");
    let datas = service.getDataOfLevel(this.level);

    this.items=[];
    datas.map((data, index)=>{
      if(index !=0){
        this.items.push({
          id:index,
          audioUrl:service.getWordLink(data.filename),
          pictureUrl:option.getLinkFileImage(service.getPictureLink(data.filename)),
        })
      }
    })

    // this.audio.playOne(this.option.getLinkFileAudio(this.firstItem.fileAudioName));
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
      // this.audio.playOne(this.option.getLinkFileAudio(this.firstItem.fileAudioName));
    }else if(currentIndex<this.items.length+1){
      console.log(this.items[0]);
      this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].audioUrl));
    }else if(currentIndex == this.items.length + 1) {
      console.log("VKL LAM NGU");
      console.log({number: this.level});
      this.navCtrl.push(MultisensoryPage, {number: this.level});
      this.viewCtrl.dismiss();
    }
  }

  slideTap() {
    this.playingEvent();
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex===0){
      // this.audio.playOne(this.firstItem.fileAudioName);
    }else if(currentIndex<this.items.length+1){
      this.audio.playOne(this.option.getLinkFileAudio(this.items[currentIndex-1].audioUrl));
    }else if(currentIndex == this.items.length + 1) {
      console.log("VKL LAM NGU");
      console.log({number: this.level});
      this.navCtrl.push(MultisensoryPage,{number: this.level});
      this.viewCtrl.dismiss();
    }
  }




  end(){
    this.slides.stopAutoplay();
  }

  slideNext() {
    if(this.slides.getActiveIndex() == this.items.length) {
      console.log("VKL LAM NGU");
      console.log({number: this.level});
      this.navCtrl.push(MultisensoryPage, {number: this.level});
    }else {
      this.slides.slideNext();
    }
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
    this.navCtrl.push(LessonPage, {level: this.level});
    this.viewCtrl.dismiss();
  }
}
