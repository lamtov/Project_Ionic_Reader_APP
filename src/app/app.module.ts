import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AudioPlayer} from "../providers/audio";
import {EverydayPhrasesService} from "../providers/everyday-phrases-service";
import {OptionService} from "../providers/option-service";
import {AlphabetService} from "../providers/alphabet-service";
import {StoryService} from '../providers/story-service';
import {StoriesPage} from '../pages/stories/stories';
import {StoryPage} from '../pages/story/story';
import {SplitsPage} from '../pages/splits/splits';

import {GamePage} from "../pages/part/game/game";
import {MultisensoryPage} from "../pages/part/multisensory/multisensory";
import {PatternPhonicPage} from "../pages/part/pattern-phonic/pattern-phonic";
import {SighWordsPage} from "../pages/part/sigh-words/sigh-words";
import {WordSplitPage} from "../pages/part/word-split/word-split";
import {MultisensoryService} from "../providers/multisensory-service";
import {SightWordsService} from "../providers/sight-words-service";
import {PatternPhonicService} from "../providers/pattern-phonic-service";
import {WordSplitService} from "../providers/word-split-service";

import {PatternPhonic2Page} from "../pages/part/pattern-phonic2/pattern-phonic2";
import {PatternPhonic2Service} from "../providers/pattern-phonic2-service";
import {PictureFlashPage} from "../pages/part/picture-flash/picture-flash";
import {PictureFlashService} from "../providers/picture-flash-service";


import {WelcomePage} from "../pages/welcome/welcome";
import {LessonPage} from "../pages/lesson/lesson";
import {MenuService} from "../providers/menu-service";
import {SignupPage} from "../pages/authentication/signup/signup";
import {SigninPage} from "../pages/authentication/signin/signin";

import {ImageService} from "../providers/image-service";
import {AuthenticationService} from "../providers/authentication-service";
import {QuestionPage} from "../pages/modal/question/question";
import {SettingService} from "../providers/setting-service";
import {LevelPage} from "../pages/main/level/level";
import {LevelService} from "../providers/level-service";
import {MainPage} from "../pages/main/main";
import {RatePage} from "../pages/modal/rate/rate";
import {SharePage} from "../pages/modal/share/share";
import {CountryPage} from "../pages/modal/country/country";
import {SettingsPage} from "../pages/main/settings/settings";



@NgModule({
  declarations: [
    MyApp,WelcomePage, SigninPage, SignupPage,
    LessonPage,
    GamePage,MultisensoryPage,PatternPhonicPage,PictureFlashPage,
    SighWordsPage,WordSplitPage,
    PictureFlashPage, PatternPhonic2Page, StoriesPage, StoryPage,SplitsPage,

    MainPage, QuestionPage, LevelPage, SettingsPage, RatePage, SharePage, CountryPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,WelcomePage, SigninPage, SignupPage,
    LessonPage,
    GamePage,MultisensoryPage,PatternPhonicPage,PictureFlashPage,
    SighWordsPage,WordSplitPage,
    PictureFlashPage, PatternPhonic2Page, StoriesPage,
    StoryPage, SplitsPage,

    MainPage,QuestionPage, LevelPage, SettingsPage, RatePage, SharePage, CountryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AudioPlayer,EverydayPhrasesService,
    OptionService, MenuService, ImageService, AuthenticationService, SettingService,
    AlphabetService,MultisensoryService,
    SightWordsService,PatternPhonicService,
    WordSplitService, PatternPhonic2Service, PictureFlashService, StoryService, LevelService

	]

})
export class AppModule {}
