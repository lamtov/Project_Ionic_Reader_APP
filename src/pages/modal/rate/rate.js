"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RatePage = (function () {
    function RatePage(platform, viewCtrl, navCtrl, navParams, imageService) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageService = imageService;
    }
    RatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatePage');
    };
    RatePage.prototype.ngOnInit = function () {
        this.bg_image_rate = this.imageService.getImageXHDPIV4("basic_card_3.png");
        this.icon_title_rate = this.imageService.getImageXHDPIV4("rate_us_3.png");
        this.icon_love_rate = this.imageService.getImageXHDPIV4("love_gift_1.png");
        this.icon_star_rate = this.imageService.getImageXHDPIV4("star_3.png");
        this.icon_rate_it = this.imageService.getImageXHDPIV4("rate_it_3.png");
    };
    RatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RatePage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    RatePage = __decorate([
        core_1.Component({
            selector: 'page-rate',
            templateUrl: 'rate.html'
        })
    ], RatePage);
    return RatePage;
}());
exports.RatePage = RatePage;
