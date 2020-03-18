import { Component } from '@angular/core';
import {NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {ImageService} from "../../../providers/image-service";

@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {

  // Image, background, icon
  bg_image_share;
  icon_title_share;
  icon_facebook_share;
  icon_twitter_share;
  icon_more_share;

  constructor( public platform: Platform, public viewCtrl: ViewController, public navCtrl: NavController,
               public navParams: NavParams, public imageService: ImageService) {}

  ngOnInit(): void {
    this.bg_image_share = this.imageService.getImageXHDPIV4("flags_bg.png");
    this.icon_title_share = this.imageService.getImageXHDPIV4("share_it_1.png");
    this.icon_facebook_share = this.imageService.getImageXHDPIV4("icon_social_fb.png");
    this.icon_twitter_share = this.imageService.getImageXHDPIV4("icon_social_tt.png");
    this.icon_more_share = this.imageService.getImageXHDPIV4("icon_more_5.png");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

}
