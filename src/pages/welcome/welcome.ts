import {Component, OnInit, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import { NavController } from 'ionic-angular';
import {SigninPage} from "../authentication/signin/signin";
import {SignupPage} from "../authentication/signup/signup";
import {MainPage} from "../main/main";
import {ImageService} from "../../providers/image-service";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  animations: [
    trigger('goto', [
      state('zoomOutRight', style({
      })),
      transition('zoomInLeft => void, * => zoomOutRight', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
          style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
          style({opacity: 1, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1})
        ]))
      ]),
    ]),

    trigger('fadeInAnimation', [
      transition('* => fadeInLeft', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
          style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
      ]),
      transition('fadeInLeft => void, * => fadeOutRight', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
          style({opacity: 1, transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
      ]),
      transition('* => fadeInRight', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'translate3d(100%, 0, 0)', offset: 0}),
          style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
      ]),
    ]),


    trigger('zoomInAnimation', [
      transition('* => zoomIn', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'scale3d(.1, .1, .1)', offset: 0}),
          style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
      ]),
      transition('zoomIn => void, * => zoomOut', [
        animate("600ms", keyframes([
          style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
          style({opacity: 1, transform: 'scale3d(.1, .1, .1)', offset: 1})
        ]))
      ]),
    ])
  ]
})
export class WelcomePage implements OnInit {

  // Animation state
  btnZoomInAnimation: string;
  btnFadeInLeftAnimation: string;
  btnFadeInRightAnimation: string;

  btnGoToAnimation:string;
  btnGoToLeftAnimation: string;
  btnGoToRightAnimation: string;

  // background, image, icon
  bg_welcome_page: string;

  constructor(public navCtrl: NavController, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.bg_welcome_page = this.imageService.getImageXHDPIV4("bg_welcome.png");
  }

  ionViewDidEnter() {
    this.btnZoomInAnimation = "zoomIn";
    this.btnFadeInLeftAnimation = "fadeInLeft";
    this.btnFadeInRightAnimation = "fadeInRight";
  }

  goToSignIn() {
    this.btnGoToLeftAnimation = "zoomOutRight"
  }
  goToSignInDone() {
    if(this.btnGoToLeftAnimation == "zoomOutRight") {
      this.navCtrl.push(SigninPage);
    }
  }

  goToSignUp() {
    this.btnGoToRightAnimation = "zoomOutRight"
  }
  goToSignUpDone() {
    if(this.btnGoToRightAnimation == "zoomOutRight") {
      this.navCtrl.push(SignupPage);
    }
  }
  goToCategory() {
    this.btnGoToAnimation = "zoomOutRight"
  }
  goToCategoryDone(){
    if(this.btnGoToAnimation == "zoomOutRight"){ //truong họp goto doi nhung phải dung y minh mơi nhan hàm này
      this.navCtrl.setRoot(MainPage);
    }
  }
}
