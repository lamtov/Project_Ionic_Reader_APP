import {Component} from "@angular/core";
import {NavController, NavParams, Platform, ViewController} from "ionic-angular";
import {ImageService} from "../../../providers/image-service";

@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html'
})
export class RatePage {

  // Image, background, icon
  bg_image_rate;
  icon_title_rate;
  icon_star_rate;
  icon_rate_it;
  icon_love_rate;

  constructor( public platform: Platform, public viewCtrl: ViewController, public navCtrl: NavController,
               public navParams: NavParams, public imageService: ImageService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

  ngOnInit(): void {
    this.bg_image_rate = this.imageService.getImageXHDPIV4("basic_card_3.png");
    this.icon_title_rate = this.imageService.getImageXHDPIV4("rate_us_3.png");
    this.icon_love_rate = this.imageService.getImageXHDPIV4("love_gift_1.png");
    this.icon_star_rate = this.imageService.getImageXHDPIV4("star_3.png");
    this.icon_rate_it = this.imageService.getImageXHDPIV4("rate_it_3.png");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goBack() {
    this.viewCtrl.dismiss();
  }
}
