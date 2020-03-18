import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {
  WORDS_ENDING_WITH_ai, WORDS_ENDING_WITH_ais, WORDS_ENDING_WITH_aof, WORDS_ENDING_WITH_aor, WORDS_ENDING_WITH_au,
  WORDS_ENDING_WITH_aus, WORDS_ENDING_WITH_ayx, WORDS_ENDING_WITH_ayj, WORDS_ENDING_WITH_am, WORDS_ENDING_WITH_ams,
  WORDS_ENDING_WITH_angf, WORDS_ENDING_WITH_angr, WORDS_ENDING_WITH_aps, WORDS_ENDING_WITH_apj, WORDS_ENDING_WITH_ats,
  WORDS_ENDING_WITH_atj, WORDS_ENDING_WITH_ac1s, WORDS_ENDING_WITH_ac1j, WORDS_ENDING_WITH_ang1,
  WORDS_ENDING_WITH_ang1s, WORDS_ENDING_WITH_ap1j
} from "../mock_datas/S2_Pho";
/*
 Generated class for the PatternPhonicService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class PatternPhonic2Service {

  constructor(public http: Http) {
    console.log('Hello PatternPhonicService Provider');
  }
  getDataOfLevel(level:number): Word[]{
    switch(level) {
      case 1: return WORDS_ENDING_WITH_ai;
      case 2: return  WORDS_ENDING_WITH_ais;
      case 3: return WORDS_ENDING_WITH_aof;
      case 4: return WORDS_ENDING_WITH_aor;
      case 5: return WORDS_ENDING_WITH_au;
      case 6: return WORDS_ENDING_WITH_aus;
      case 7: return WORDS_ENDING_WITH_ayx;
      case 8: return WORDS_ENDING_WITH_ayj;
      case 9: return WORDS_ENDING_WITH_am;
      case 10: return WORDS_ENDING_WITH_ams;
      case 11: return WORDS_ENDING_WITH_angf;
      case 12: return WORDS_ENDING_WITH_angr;
      case 13: return WORDS_ENDING_WITH_aps;
      case 14: return WORDS_ENDING_WITH_apj;
      case 15: return WORDS_ENDING_WITH_ats;
      case 16: return WORDS_ENDING_WITH_atj;
      case 17: return WORDS_ENDING_WITH_ac1s;
      case 18: return WORDS_ENDING_WITH_ac1j;
      case 19: return WORDS_ENDING_WITH_ang1;
      case 20: return WORDS_ENDING_WITH_ang1s;
      case 21: return WORDS_ENDING_WITH_ap1j;
      default: return WORDS_ENDING_WITH_ai;
    }


  }
  getDataIndexOfLevel(index:number,level:number): Word {
    switch(level) {
      case 1: return WORDS_ENDING_WITH_ai[index];
      case 2: return  WORDS_ENDING_WITH_ais[index];
      case 3: return WORDS_ENDING_WITH_aof[index];
      case 4: return WORDS_ENDING_WITH_aor[index];
      case 5: return WORDS_ENDING_WITH_au[index];
      case 6: return WORDS_ENDING_WITH_aus[index];
      case 7: return WORDS_ENDING_WITH_ayx[index];
      case 8: return WORDS_ENDING_WITH_ayj[index];
      case 9: return WORDS_ENDING_WITH_am[index];
      case 10: return WORDS_ENDING_WITH_ams[index];
      case 11: return WORDS_ENDING_WITH_angf[index];
      case 12: return WORDS_ENDING_WITH_angr[index];
      case 13: return WORDS_ENDING_WITH_aps[index];
      case 14: return WORDS_ENDING_WITH_apj[index];
      case 15: return WORDS_ENDING_WITH_ats[index];
      case 16: return WORDS_ENDING_WITH_atj[index];
      case 17: return WORDS_ENDING_WITH_ac1s[index];
      case 18: return WORDS_ENDING_WITH_ac1j[index];
      case 19: return WORDS_ENDING_WITH_ang1[index];
      case 20: return WORDS_ENDING_WITH_ang1s[index];
      case 21: return WORDS_ENDING_WITH_ap1j[index];
      default: return WORDS_ENDING_WITH_ai[index];
    }
  }
  getWordLink(fileName:String){
    return fileName+"-pro";
  }

}
