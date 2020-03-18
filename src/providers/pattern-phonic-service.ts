import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {
  WORDS_BEGINNING_WITH_a, WORDS_BEGINNING_WITH_a2, WORDS_BEGINNING_WITH_e,
  WORDS_BEGINNING_WITH_e3, WORDS_BEGINNING_WITH_i, WORDS_BEGINNING_WITH_o, WORDS_BEGINNING_WITH_o4,
  WORDS_BEGINNING_WITH_y, WORDS_BEGINNING_WITH_c, WORDS_BEGINNING_WITH_d, WORDS_BEGINNING_WITH_g,   WORDS_BEGINNING_WITH_o6, WORDS_BEGINNING_WITH_u, WORDS_BEGINNING_WITH_b, WORDS_BEGINNING_WITH_d7, WORDS_BEGINNING_WITH_h, WORDS_BEGINNING_WITH_k, WORDS_BEGINNING_WITH_m, WORDS_BEGINNING_WITH_l, WORDS_BEGINNING_WITH_u5
} from "../mock_datas/S1_Pho";

/*
  Generated class for the PatternPhonicService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PatternPhonicService {

  constructor(public http: Http) {
    console.log('Hello PatternPhonicService Provider');
  }
  getDataOfLevel(level:number): Word[]{
    switch (level){
      case 1: return WORDS_BEGINNING_WITH_a;
      case 2: return WORDS_BEGINNING_WITH_a2;
      case 3: return WORDS_BEGINNING_WITH_e;
      case 4: return WORDS_BEGINNING_WITH_e3;
      case 5: return WORDS_BEGINNING_WITH_i;
      case 6: return WORDS_BEGINNING_WITH_o;
      case 7: return WORDS_BEGINNING_WITH_o4;
      case 8: return WORDS_BEGINNING_WITH_o6;
      case 9: return WORDS_BEGINNING_WITH_u;
      case 10: return WORDS_BEGINNING_WITH_u5;
      case 11: return WORDS_BEGINNING_WITH_y;
      case 12: return WORDS_BEGINNING_WITH_b;
      case 13: return WORDS_BEGINNING_WITH_c;
      case 14: return WORDS_BEGINNING_WITH_d;
      case 15: return WORDS_BEGINNING_WITH_d7;
      case 16: return WORDS_BEGINNING_WITH_g;
      case 17: return WORDS_BEGINNING_WITH_h;
      case 18: return WORDS_BEGINNING_WITH_k;
      case 19: return WORDS_BEGINNING_WITH_l;
      case 20: return WORDS_BEGINNING_WITH_m;
      default: return WORDS_BEGINNING_WITH_o;
    }

  }
  getDataIndexOfLevel(index:number,level:number): Word {
    switch (level){
      case 1: return WORDS_BEGINNING_WITH_a[index];
      case 2: return WORDS_BEGINNING_WITH_a2[index];
      case 3: return WORDS_BEGINNING_WITH_e[index];
      case 4: return WORDS_BEGINNING_WITH_e3[index];
      case 5: return WORDS_BEGINNING_WITH_i[index];
      case 6: return WORDS_BEGINNING_WITH_o[index];
      case 7: return WORDS_BEGINNING_WITH_o4[index];
      case 8: return WORDS_BEGINNING_WITH_o6[index];
      case 9: return WORDS_BEGINNING_WITH_u[index];
      case 10: return WORDS_BEGINNING_WITH_u5[index];
      case 11: return WORDS_BEGINNING_WITH_y[index];
      case 12: return WORDS_BEGINNING_WITH_b[index];
      case 13: return WORDS_BEGINNING_WITH_c[index];
      case 14: return WORDS_BEGINNING_WITH_d[index];
      case 15: return WORDS_BEGINNING_WITH_d7[index];
      case 16: return WORDS_BEGINNING_WITH_g[index];
      case 17: return WORDS_BEGINNING_WITH_h[index];
      case 18: return WORDS_BEGINNING_WITH_k[index];
      case 19: return WORDS_BEGINNING_WITH_l[index];
      case 20: return WORDS_BEGINNING_WITH_m[index];
      default: return WORDS_BEGINNING_WITH_o[index];
    }
  }
  getWordLink(fileName:String){
    return fileName+"-pro";
  }

}