import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {WordSplit} from "../models/word_split";
import {WORDS_SPLIT, LIST_1_WORD_SPLIT} from '../mock_datas/S1_Split';
import {LIST_2_WORD_SPLIT} from '../mock_datas/S2_Split';

@Injectable()
export class WordSplitService {
  constructor(public http: Http) {
  }

  getAllData() : WordSplit[] {
    return WORDS_SPLIT;
  }

  getDataList1Index(index: number) : WordSplit[] {
    return LIST_1_WORD_SPLIT[index];
  }

  getDataList2Index(index: number) : WordSplit[] {
    return LIST_2_WORD_SPLIT[index];
  }

  getList1() : any[] {
    return LIST_1_WORD_SPLIT;
  }

  getList2() : any[] {
    return LIST_2_WORD_SPLIT;
  }
}
