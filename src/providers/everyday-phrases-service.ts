import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from '../models/word';
import {EVERYDAY_PHRASES} from '../mock_datas/Default';
/*
  Generated class for the EverydayPhrasesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EverydayPhrasesService {

  constructor(public http: Http) {
    console.log('Hello EverydayPhrasesService Provider');
  }
  getAllData(): Word[]{
    return EVERYDAY_PHRASES;
  }
  getDataIndex(i:number): Word {
    return EVERYDAY_PHRASES[i];
  }

}
