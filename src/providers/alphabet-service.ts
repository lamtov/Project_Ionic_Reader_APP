import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Word} from "../models/word";
import {THE_ALPHABETS} from "../mock_datas/Default";


@Injectable()
export class AlphabetService {

  constructor(public http: Http) {
    console.log('Hello EverydayPhrasesService Provider');
  }
  getAllData(): Word[]{
    return THE_ALPHABETS;
  }
  getDataIndex(i:number): Word {
    return THE_ALPHABETS[i];
  }

}

