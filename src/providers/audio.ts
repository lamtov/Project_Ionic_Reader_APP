import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Split} from '../models/split';

@Injectable()
export class AudioPlayer {
  audio = new Audio();
  constructor(public http: Http) {
    console.log('Hello Audio Provider');
  }
  getAudio(){
    return this.audio;
  }
  playOne(audioName: String){
    this.audio.src = 'assets/sound/'+audioName;
    this.audio.load();
    this.audio.play();
    this.audio.loop = false;
  }
  playLoop(audioName: String){
    this.audio.src = 'assets/sound/'+audioName;
    this.audio.load();
    this.audio.play();

    this.audio.loop = true;
  }
  stopPlay(){
    this.audio.src="";
  }
  play(audioName: string, extension: string) {
    this.audio.src = 'assets/sound/'+audioName + '.' + extension;
    this.audio.load();
    this.audio.play();
    this.audio.loop = false;
  }
  playSplit(split: Split) {
    this.audio.currentTime = split.start;
    this.audio.play();

    this.audio.ontimeupdate = () => {
      if(this.audio.currentTime >= split.start + split.duration) {
        this.audio.pause();
      }
    };
  }
  playPartial(start: number, duration: number) {
    this.audio.currentTime = start;
    this.audio.play();

    this.audio.ontimeupdate = () => {
      if(this.audio.currentTime >= start + duration) {
        this.audio.pause();
      }
    };
  }
}
