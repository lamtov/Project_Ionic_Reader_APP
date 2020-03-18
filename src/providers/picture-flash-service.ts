import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {
  ACTION_WORDS_1, ANIMALS_AND_BODY_PARTS, BABY_THINGS, COLORS_1, COLORS_AND_SHAPES,
  COMMON_ANIMALS_1, COMMON_ANIMAL_2, FOOD_1, FRUITS_1, HAND_ACTIONS_1, HAND_ACTIONS_2, KIDS_THINGS, NATURE_1, NATURE_2,
  PARTS_OF_THE_BODY_HEAD, PART_OF_THE_BODY_1, PART_OF_THE_BODY_2, PEOPLE
} from "../mock_datas/S1_Gen";
import {ACTION_WORDS_2} from "../mock_datas/S1_Gen";
import {ACTION_WORDS_3} from "../mock_datas/S1_Gen";

/*
 Generated class for the MultisensoryService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

//Phần này phải chỉnh sao cho dữ liệu là random giữa 3 phần của multisensory
@Injectable()
export class PictureFlashService {

  constructor(public http: Http) {
    console.log('Hello MultisensoryService Provider');
  }
  getDataOfLevel(level:number): Word[]{
    switch (level){
      case 1: return ACTION_WORDS_1;
      case 2: return ACTION_WORDS_2;
      case 3: return ACTION_WORDS_3;
      case 4: return ANIMALS_AND_BODY_PARTS;
      case 5: return BABY_THINGS;
      case 6: return COLORS_1;
      case 7: return COLORS_AND_SHAPES;
      case 8: return COMMON_ANIMALS_1;
      case 9: return COMMON_ANIMAL_2;
      case 10: return FOOD_1;
      case 11: return FRUITS_1;
      case 12: return HAND_ACTIONS_1;
      case 13: return HAND_ACTIONS_2;
      case 14: return KIDS_THINGS;
      case 15: return NATURE_1;
      case 16: return NATURE_2;
      case 17: return PARTS_OF_THE_BODY_HEAD;
      case 18: return PART_OF_THE_BODY_1;
      case 19: return PART_OF_THE_BODY_2;
      case 20: return PEOPLE;
      default: return ACTION_WORDS_1;
    }

  }
  getDataIndexOfLevel(index:number,level:number): Word {
    switch (level){
      case 1: return ACTION_WORDS_1[index];
      case 2: return ACTION_WORDS_2[index];
      case 3: return ACTION_WORDS_3[index];
      case 4: return ANIMALS_AND_BODY_PARTS[index];
      case 5: return BABY_THINGS[index];
      case 6: return COLORS_1[index];
      case 7: return COLORS_AND_SHAPES[index];
      case 8: return COMMON_ANIMALS_1[index];
      case 9: return COMMON_ANIMAL_2[index];
      case 10: return FOOD_1[index];
      case 11: return FRUITS_1[index];
      case 12: return HAND_ACTIONS_1[index];
      case 13: return HAND_ACTIONS_2[index];
      case 14: return KIDS_THINGS[index];
      case 15: return NATURE_1[index];
      case 16: return NATURE_2[index];
      case 17: return PARTS_OF_THE_BODY_HEAD[index];
      case 18: return PART_OF_THE_BODY_1[index];
      case 19: return PART_OF_THE_BODY_2[index];
      case 20: return PEOPLE[index];
      default: return ACTION_WORDS_1[index];
    }
  }
  getWordLink(fileName:String){
    return fileName+"-pro";
  }
  getPictureLink(fileName:String){
    return "bk-"+fileName;
  }
  getPictureAudioLink(fileName:String){
    return fileName+"-pa";
  }

}



