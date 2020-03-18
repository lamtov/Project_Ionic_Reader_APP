import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {
  SIGHT_WORDS_1, SIGHT_WORDS_2, SIGHT_WORDS_3, SIGHT_WORDS_4, SIGHT_WORDS_5,
  SIGHT_WORDS_6, SIGHT_WORDS_7, SIGHT_WORDS_8, SIGHT_WORDS_9, SIGHT_WORDS_10, SIGHT_WORDS_11, SIGHT_WORDS_12,
  SIGHT_WORDS_13, SIGHT_WORDS_14, SIGHT_WORDS_15, SIGHT_WORDS_16, SIGHT_WORDS_17, SIGHT_WORDS_18, SIGHT_WORDS_19
} from "../mock_datas/S1_Sight";
/*
  Generated class for the SightWordsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SightWordsService {

  constructor(public http: Http) {
    console.log('Hello SightWordsService Provider');
  }
  getDataOfLevel(level:number): Word[]{
    switch (level){
      case 1: return SIGHT_WORDS_1;
      case 2: return SIGHT_WORDS_2;
      case 3: return SIGHT_WORDS_3;
      case 4: return SIGHT_WORDS_4;
      case 5: return SIGHT_WORDS_5;
      case 6: return SIGHT_WORDS_6;
      case 7: return SIGHT_WORDS_7;
      case 8: return SIGHT_WORDS_8;
      case 9: return SIGHT_WORDS_9;
      case 10: return SIGHT_WORDS_10;
      case 11: return SIGHT_WORDS_11;
      case 12: return SIGHT_WORDS_12;
      case 13: return SIGHT_WORDS_13;
      case 14: return SIGHT_WORDS_14;
      case 15: return SIGHT_WORDS_15;
      case 16: return SIGHT_WORDS_16;
      case 17: return SIGHT_WORDS_17;
      case 18: return SIGHT_WORDS_18;
      case 19: return SIGHT_WORDS_19;
      case 20: return SIGHT_WORDS_1;
      default: return SIGHT_WORDS_1;
    }

  }
  getDataIndexOfLevel(index:number,level:number): Word {
    switch (level){
      case 1: return SIGHT_WORDS_1[index];
      case 2: return SIGHT_WORDS_2[index];
      case 3: return SIGHT_WORDS_3[index];
      case 4: return SIGHT_WORDS_4[index];
      case 5: return SIGHT_WORDS_5[index];
      case 6: return SIGHT_WORDS_6[index];
      case 7: return SIGHT_WORDS_7[index];
      case 8: return SIGHT_WORDS_8[index];
      case 9: return SIGHT_WORDS_9[index];
      case 10: return SIGHT_WORDS_10[index];
      case 11: return SIGHT_WORDS_11[index];
      case 12: return SIGHT_WORDS_12[index];
      case 13: return SIGHT_WORDS_13[index];
      case 14: return SIGHT_WORDS_14[index];
      case 15: return SIGHT_WORDS_15[index];
      case 16: return SIGHT_WORDS_16[index];
      case 17: return SIGHT_WORDS_17[index];
      case 18: return SIGHT_WORDS_18[index];
      case 19: return SIGHT_WORDS_19[index];
      case 20: return SIGHT_WORDS_1[index];
      default: return SIGHT_WORDS_1[index];
    }
  }

}
