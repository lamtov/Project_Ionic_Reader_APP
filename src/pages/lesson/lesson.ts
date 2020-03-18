import {Component, state, style, keyframes, animate, transition, trigger, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';

import {ImageService} from "../../providers/image-service";

import {GamePage} from "../part/game/game";
import {MultisensoryPage} from "../part/multisensory/multisensory";
import {PatternPhonicPage} from "../part/pattern-phonic/pattern-phonic";
import {PictureFlashPage} from "../part/picture-flash/picture-flash";
import {SighWordsPage} from "../part/sigh-words/sigh-words";
import {WordSplitPage} from "../part/word-split/word-split";
import {PatternPhonic2Page} from "../part/pattern-phonic2/pattern-phonic2";
import {StoriesPage} from "../stories/stories";
import {LevelPage} from "../main/level/level";

@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
  animations: [
    trigger('bounceInAnimation', [
      transition('* => bounceIn', [
        animate("800ms", keyframes([
          style({opacity: 0.95, transform: 'scale3d(.9, .9, .9)', offset: 0}),
          style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
          style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
          style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
          style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
          style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
      ]),
      transition('bounceIn => void, * => bounceOut', [
        animate("800ms", keyframes([
          style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
          style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
          style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
        ]))
      ]),
    ])
  ]
})

export class LessonPage {
  @ViewChild(Slides) slides: Slides;
  level:any;

  bg_image_above: string;
  back_img:string;
  divLeftDownAnimation: string;
  divRightDownAnimation: string;
  itemSlide:Array<any>;
  dot_img:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imageService:ImageService,  public viewCtrl: ViewController ) {
    this.level = {number:navParams.get('level')};


    this.bg_image_above = imageService.getImageXHDPIV4("sections_bg.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.itemSlide =[];
    let nameLesson = [];
    nameLesson.push({name:"Hình ảnh",url:"pictureFlash.png"});
    nameLesson.push({name:"Đa giác quan 1",url:"multisensory.png"});
    nameLesson.push({name:"Mô hình ngữ âm",url:"partenphonic.png"});
    nameLesson.push({name:"Đa giác quan 2",url:"multisensory.png"});
    nameLesson.push({name:"Mô hình ngữ âm 2",url:"partenphonic.png"});
    nameLesson.push({name:"Đa giác quan 3",url:"multisensory.png"});
    nameLesson.push({name:"Từ thông dụng",url:"Sightword.png"});
    nameLesson.push({name:"Đánh vần",url:"wordsplit.png"});
    nameLesson.push({name:"Nghe kể chuyện",url:"story.png"});
    nameLesson.push({name:"Trò chơi",url:"game.png"});

    for(let i=1;i<=10;i++){
      var md_Img = [];
      var cup_img="";
      var dot_img = imageService.getImageXHDPIV4("sl"+i+".png");
      var x = Math.floor((Math.random() * 4) + 1);
      for(let i=1;i<=x;i++){
        md_Img.push(imageService.getImageXHDPIV4(("md_" + i+".png")));
      }
      for(let i=x+1;i<=4;i++){
        md_Img.push(imageService.getImageXHDPIV4(("md_x.png")));
      }
      if(x==4){
        var y = Math.floor((Math.random() * 2) + 1);
        if(y==2){
          cup_img=imageService.getImageXHDPIV4("cup.png");
        } else  cup_img = imageService.getImageXHDPIV4("cup_x.png");
      }
      this.itemSlide.push({
        md_Img:md_Img,
        cup_img:cup_img,
        dot_img:dot_img,
        nameH1: nameLesson[i-1].name,
        urlImage:imageService.getImageXHDPIV4(nameLesson[i-1].url),
        i:i,
        bounceInState: ""
      });

    }
    this.dot_img = this.itemSlide[0].dot_img;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SighWordsPage');


  }
  ionViewDidEnter() {
    this.divLeftDownAnimation = "rotateInDownLeft";
    this.divRightDownAnimation = "rotateInDownRight";
    this.itemSlide[0].bounceInState="bounceIn";
    if(this.navParams.get('numberSlide')){
        this.slides.slideTo(this.navParams.get('numberSlide'), this.navParams.get('numberSlide')*1000);
    }
  }
  slideDidChanged(){
    let currentIndex = this.slides.getActiveIndex();
    // let before=currentIndex==0?currentIndex-1:this.slides.length()-1;
    this.itemSlide[currentIndex].bounceInState="bounceIn";
  }
  slideWillChanged(){
    let currentIndex = this.slides.getActiveIndex();
    // let before=currentIndex==0?currentIndex-1:this.slides.length()-1;
    this.itemSlide[currentIndex].bounceInState="";

    if(currentIndex<=9){
      this.dot_img = this.itemSlide[currentIndex].dot_img;
    }
  }

  onClickPage(i){
    switch(i){
      case 1:  this.navCtrl.push(PictureFlashPage,this.level);this.viewCtrl.dismiss();break;
      case 2:  this.navCtrl.push(MultisensoryPage,this.level);this.viewCtrl.dismiss();break;
      case 3:  this.navCtrl.push(PatternPhonicPage,this.level);this.viewCtrl.dismiss();break;
      case 4:  this.navCtrl.push(MultisensoryPage,this.level);this.viewCtrl.dismiss();break;
      case 5:  this.navCtrl.push(PatternPhonic2Page,this.level);this.viewCtrl.dismiss();break;
      case 6:  this.navCtrl.push(MultisensoryPage,this.level);this.viewCtrl.dismiss();break;
      case 7:  this.navCtrl.push(SighWordsPage,this.level);this.viewCtrl.dismiss();break;
      case 8:  this.navCtrl.push(WordSplitPage,this.level);this.viewCtrl.dismiss();break;
      case 9:  this.navCtrl.push(StoriesPage,this.level);this.viewCtrl.dismiss();break;
      case 10:  this.navCtrl.push(GamePage,this.level);this.viewCtrl.dismiss();break;
    }
  }
  onClickBack(){
    this.navCtrl.push(LevelPage);
    this.viewCtrl.dismiss();
  }
}
