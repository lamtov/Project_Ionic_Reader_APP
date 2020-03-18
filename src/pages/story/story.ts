import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import { StoryService } from '../../providers/story-service';
import { Story } from '../../models/story';
import { AudioPlayer } from '../../providers/audio';
import {ImageService} from "../../providers/image-service";
import {StoriesPage} from "../stories/stories";


@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
  bg_image_above: string;
  bg_image_slide:string;
  back_img:string;
  volume_img:string;
  stories: Story[];
  currentStory: Story;
  currentVideo: string;
  currentAudio: string;
  currentIndex: number = 0;
  isHaveVideo = false;
  isApprearAudio = false;
  isPlaying = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storyService: StoryService, private audio: AudioPlayer, public viewCtrl: ViewController, private imageService:ImageService) {
    this.bg_image_above=imageService.getImageXHDPIV4("questions_bg_2.png");
    this.bg_image_slide =imageService.getImageXHDPIV4("questions_board_2.png");
    this.back_img = imageService.getImageXHDPIV4("back.png");
    this.volume_img = imageService.getImageXHDPIV4("sound_on.png");
    this.stories = storyService.getData(this.navParams.get("id"));
    this.currentStory = this.stories[this.currentIndex];
    this.currentAudio =  this.currentStory.audioFileName;
    this.currentVideo = '';
    this.audio.getAudio().onended =  () => {
      this.isApprearAudio = true;
      this.isPlaying = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPage');
    this.playStory();
  }

  ionViewWillLeave() {
    this.audio.stopPlay();
  }

  playNextStory() {
  this.isApprearAudio = false;
  if(!this.isHaveVideo) {
    this.currentIndex++;
  }
  if(this.currentIndex < this.stories.length) {
    this.currentStory = this.stories[this.currentIndex];
    this.currentAudio = this.currentStory.audioFileName;
    if(this.isHaveVideo) {
      this.currentVideo = this.currentStory.videoFileName;
    } else {
      this.currentVideo = "";
    }
    this.isHaveVideo = !this.isHaveVideo;
  }

  this.playStory();
  this.audio.getAudio().onended =  () => {
    this.isApprearAudio = true;
    this.isPlaying = false;
  }


}
  playPrevStory() {
    this.isApprearAudio = false;
    if(this.isHaveVideo) {
      this.currentIndex--;
    }
    if(this.currentIndex >= 0) {
      this.currentStory = this.stories[this.currentIndex];
      this.currentAudio = this.currentStory.audioFileName;
      if(this.isHaveVideo) {
        this.currentVideo = this.currentStory.videoFileName;
      } else {
        this.currentVideo = "";
      }
      this.isHaveVideo = !this.isHaveVideo;
    }

    this.playStory();
    this.audio.getAudio().onended =  () => {
      this.isApprearAudio = true;
      this.isPlaying = false;
    }
  }

  playStory() {
    this.audio.play(this.currentAudio, 'mp3');
    this.isPlaying = true;
    this.audio.getAudio().onended = () => {
      this.isPlaying = false;
    }
  }

  // playStory() {
  //   this.audio.play(this.currentAudio, 'mp3');
  //   this.audio.getAudio().onended = () => {
  //     if(!this.isHaveVideo) {
  //       this.currentIndex++;
  //     }
  //     if(this.currentIndex < this.stories.length) {
  //       this.currentStory = this.stories[this.currentIndex];
  //       this.currentAudio = this.currentStory.audioFileName;
  //       if(this.isHaveVideo) {
  //         this.currentVideo = this.currentStory.videoFileName;
  //       } else {
  //         this.currentVideo = '';
  //       }
  //       this.isHaveVideo = !this.isHaveVideo;
  //       setTimeout(() => {
  //         this.playStory();
  //       }, 1000);
  //     }
  //   };
  // }
  onClickBack(){
    this.navCtrl.push(StoriesPage);
    this.viewCtrl.dismiss();
  }
}
