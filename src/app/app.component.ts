import {Component, ViewChild, OnInit} from '@angular/core';
import {Platform, MenuController, Nav, ModalController } from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {ImageService} from "../providers/image-service";

import {WelcomePage} from "../pages/welcome/welcome";
import {LessonPage} from "../pages/lesson/lesson";
import {QuestionPage} from "../pages/modal/question/question";
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = WelcomePage;

  pages: Array<{title: string, icon: string, color: string, component: any}>;


  bg_avatar: String;
  icon_avatar: String;

  constructor(public platform: Platform, public menu: MenuController, public modalCtrl: ModalController, public imageService: ImageService) {
    this.initializeApp();

    this.pages = [
      {
        title: 'WelcomePage', icon: 'css3', color: '#0CA9EA', component: WelcomePage
      },
      {
        title: 'LessonPage', icon: 'sass', color: '#CE6296', component: LessonPage
      }
    ]
  }


  ngOnInit(): void {
    this.bg_avatar = this.imageService.getImageWelcome("bg_3.jpg");
    this.icon_avatar = this.imageService.getImageWelcome("icon_7.png");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  openSettings() {
    let modal = this.modalCtrl.create(QuestionPage);
    modal.present();
  }
}
