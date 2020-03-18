"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var settings_1 = require("../../main/settings/settings");
var QuestionPage = (function () {
    function QuestionPage(platform, viewCtrl, navCtrl, navParams, imageService) {
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageService = imageService;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.ngOnInit = function () {
        this.bg_image_question = this.imageService.getImageXHDPIV4("flags_bg.png");
    };
    QuestionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    QuestionPage.prototype.goToSettings = function () {
        this.navCtrl.push(settings_1.SettingsPage);
    };
    QuestionPage = __decorate([
        core_1.Component({
            selector: 'page-question',
            templateUrl: 'question.html'
        })
    ], QuestionPage);
    return QuestionPage;
}());
exports.QuestionPage = QuestionPage;
