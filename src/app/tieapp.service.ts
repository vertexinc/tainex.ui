import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';
import { Message } from './body/message';

@Injectable()
//Act as the controller here
export class TieappService {
  private _tieMessageListUrl = "./app/tieapp.data.tieMessageList.json";
  private currentMessage;
  constructor(private _http: Http) { }

  getMessageList() {
    return this._http.get(this._tieMessageListUrl)
      .map(res => res.json());
  }

  setCurrentMsg() {


    // alert(JSON.stringify(this.currentMessage));
  }

  getCurrentMsg() {
    return this.currentMessage;
  }
}
