import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ImageService} from "../../../providers/image-service";
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  // background, image, icon
  bg_signup: string;
  icon_back_signup: string;

  // Model user
  user: any = {
    childrenName: 'To Van Lam',
    childrenAge: 5,
    email: 'ttlam@gmail.com',
    phone: '0984003349',
    password: '123456',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public imageService: ImageService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  ngOnInit(): void {
    this.bg_signup = this.imageService.getImageXHDPIV4("bg_welcome.png");
    this.icon_back_signup = this.imageService.getImageXHDPIV4("left_arrow.png");
  }


  signupForm() {
    console.log(this.user);
  }

  backSignup() {
    this.navCtrl.pop();
  }

  goToSignIn() {
    this.navCtrl.push(SigninPage);
  }
}
