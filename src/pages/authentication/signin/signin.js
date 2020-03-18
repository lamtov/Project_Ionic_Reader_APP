"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var signup_1 = require("../signup/signup");
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, imageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageService = imageService;
        // Model user
        this.user = {
            phone: '0984003349',
            password: '123456',
            remember: false
        };
    }
    SigninPage.prototype.ngOnInit = function () {
        this.bg_signin = this.imageService.getImageXHDPIV4("bg_welcome.png");
        this.icon_back_signin = this.imageService.getImageXHDPIV4("left_arrow.png");
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SigninPage.prototype.signinForm = function () {
        console.log(this.user);
    };
    SigninPage.prototype.backSignin = function () {
        this.navCtrl.pop();
    };
    SigninPage.prototype.goToSignUp = function () {
        this.navCtrl.push(signup_1.SignupPage);
    };
    SigninPage = __decorate([
        core_1.Component({
            selector: 'page-signin',
            templateUrl: 'signin.html',
        })
    ], SigninPage);
    return SigninPage;
}());
exports.SigninPage = SigninPage;
