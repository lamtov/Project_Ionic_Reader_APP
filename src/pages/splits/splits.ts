import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {WordSplitPage} from '../word-split/word-split';
import {WordSplitService} from '../../providers/word-split-service';
/*
  Generated class for the Splits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-splits',
  templateUrl: 'splits.html'
})
export class SplitsPage {

  list1Word: any[];
  list2Word: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: WordSplitService) {
    this.list1Word = service.getList1();
    this.list2Word = service.getList2();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitsPage');
  }

  playSplitIndex(index: number, listNum) {
    this.navCtrl.push(WordSplitPage, {id: index, listNum: listNum});
  }
}
