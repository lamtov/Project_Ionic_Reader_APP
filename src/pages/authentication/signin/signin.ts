import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImageService} from "../../../providers/image-service";
import {SignupPage} from "../signup/signup";
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage implements OnInit {

  // background, image, icon
  bg_signin: string;
  icon_back_signin: string;

  // Model user
  user: any = {
    phone: '0984003349',
    password: '123456',
    remember: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public imageService: ImageService) {}
  ngOnInit(): void {
    this.bg_signin = this.imageService.getImageXHDPIV4("bg_welcome.png");
    this.icon_back_signin = this.imageService.getImageXHDPIV4("left_arrow.png");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  signinForm() {
    console.log(this.user);
  }

  backSignin() {
    this.navCtrl.pop();
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }
}
