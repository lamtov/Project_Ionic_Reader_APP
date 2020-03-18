"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SharePage = (function () {
    function SharePage(platform, viewCtrl, navCtrl, navParams, imageService) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageService = imageService;
    }
    SharePage.prototype.ngOnInit = function () {
        this.bg_image_share = this.imageService.getImageXHDPIV4("flags_bg.png");
        this.icon_title_share = this.imageService.getImageXHDPIV4("share_it_1.png");
        this.icon_facebook_share = this.imageService.getImageXHDPIV4("icon_social_fb.png");
        this.icon_twitter_share = this.imageService.getImageXHDPIV4("icon_social_tt.png");
        this.icon_more_share = this.imageService.getImageXHDPIV4("icon_more_5.png");
    };
    SharePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SharePage.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    SharePage = __decorate([
        core_1.Component({
            selector: 'page-share',
            templateUrl: 'share.html'
        })
    ], SharePage);
    return SharePage;
}());
exports.SharePage = SharePage;
