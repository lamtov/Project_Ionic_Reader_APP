/**
 * Created by LaptopTCC on 2/26/2017.
 */
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Story} from "../models/story";
import {STORIES, STORIES_NAME} from '../mock_datas/S2_Story';


@Injectable()
export class StoryService {
  constructor(public http: Http) {
  }

  getData(id: number): Story[] {
    return STORIES[id];
  }

  getStoriesName() : string[] {
    return STORIES_NAME;
  }

}
