"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var signin_1 = require("../signin/signin");
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, imageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageService = imageService;
        // Model user
        this.user = {
            childrenName: 'To Van Lam',
            childrenAge: 5,
            email: 'ttlam@gmail.com',
            phone: '0984003349',
            password: '123456',
        };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ngOnInit = function () {
        this.bg_signup = this.imageService.getImageXHDPIV4("bg_welcome.png");
        this.icon_back_signup = this.imageService.getImageXHDPIV4("left_arrow.png");
    };
    SignupPage.prototype.signupForm = function () {
        console.log(this.user);
    };
    SignupPage.prototype.backSignup = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.goToSignIn = function () {
        this.navCtrl.push(signin_1.SigninPage);
    };
    SignupPage = __decorate([
        core_1.Component({
            selector: 'page-signup',
            templateUrl: 'signup.html'
        })
    ], SignupPage);
    return SignupPage;
}());
exports.SignupPage = SignupPage;
