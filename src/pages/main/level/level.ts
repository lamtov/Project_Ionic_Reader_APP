import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';

import {LevelService} from "../../../providers/level-service";
import {Level} from "../../../models/level";
import {LessonPage} from "../../lesson/lesson";
import {MainPage} from "../main";

@Component({
  selector: 'page-level',
  templateUrl: 'level.html'
})
export class LevelPage {

  slides: Array<any>;

  @ViewChild(Slides) loopSlider: Slides;

  myTopSlideOptions: any;

  iconsLevel: Array<Level>;
  bg_image_level;
  icon_back_level;
  icon_bg_all_level;


  firstItem:Array<any>;
  marginLeft:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private levelService: LevelService,
              public viewCtrl: ViewController) {


    this.iconsLevel = this.levelService.getIconsLevel();
    this.slides = [];
    this.firstItem=[];
    for(let i=0;i<9 && i<= this.iconsLevel.length;i++){
      this.firstItem.push(this.iconsLevel[i]);
    }
    let arr2=[];
    for(let i=9; i<= this.iconsLevel.length;i++){
      arr2.push(this.iconsLevel[i]);
      if(i%9==8){
        this.slides.push(arr2);
        arr2=[];
      }
    }

    this.myTopSlideOptions = {
      initialSlide: 1,
      loop: true
    };
    this.marginLeft="0%";
  }

  ngOnInit(): void {
    this.iconsLevel = this.levelService.getIconsLevel();
    this.bg_image_level = this.levelService.getIcon("questions_bg_2.png");
    this.icon_back_level = this.levelService.getIcon("back.png");
    this.icon_bg_all_level = this.levelService.getIcon("basic_card_2.png");
  }

  ngAfterViewInit() {
    console.log(this.loopSlider);
  }

  onClickBack(){
    this.navCtrl.push(MainPage);
  }
  onSlideWillChanged(slider: Slides){
    let curr=this.loopSlider.getActiveIndex();
    this.marginLeft=curr*10+"%";
  }

  goToLesson(level: number) {
    this.navCtrl.push(LessonPage, {level: level});
    this.viewCtrl.dismiss();
  }
}
