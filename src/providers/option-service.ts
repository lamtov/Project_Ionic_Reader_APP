import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {LESSON_TITLES} from "../mock_datas/Default";

@Injectable()
export class OptionService {
  isMan:boolean;
  isHN:boolean;
  voice: string;

  constructor(public http: Http) {
    this.isMan = true;
    this.isHN = true;
    this.voice = "-man"
  }

  setVoice(nameVoice: string) {
    this.voice = nameVoice;
  }
  getVoice() {
    return this.voice;
  }

  setToMan(){
    this.isMan = true;
  }
  setToWoMan(){
    this.isMan =false;
  }
  setToHN(){
    this.isHN = true;
  }
  setToHCM(){
    this.isHN = false;
  }
  getLinkFileAudio(linkFileAudio:String) :String{
    var result = linkFileAudio;
    var x = Math.floor((Math.random() * 3) + 1);
    if(x===1){
      result= result+"-man";
    }else if(x===2){
      result=result+"-woman";
    } else {
      result = result+"-child";
    }
    result = this.isHN ? "bk-hn-" + result : "bk-vn-"+ result +".mp3";
    return result+".mp3";
  }
  getLinkFileImage(linkFileImage:String) :String{
    var x = Math.floor((Math.random() * 4) + 1);
    var result ="assets/image/"+ linkFileImage+"-"+x+".jpg";
    return result;
  }
  getRandomColor() : String{
    var x = Math.floor((Math.random() * 10) + 1);
    switch (x){
      case 1: return 'red';
      case 2: return 'orange';
      case 3: return 'yellow';
      case 4: return 'green';
      case 5: return 'black';
      case 6: return 'bole';
      case 7: return 'byzantine';
      case 8: return 'purple';
      case 9: return 'umber';
      case 10: return 'violet';
    }
  }

  getIconLesson(): Word[]{
    return LESSON_TITLES;
  }
}
