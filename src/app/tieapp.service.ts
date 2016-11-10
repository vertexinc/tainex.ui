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
  private _currentMsg1Url = "./app/tieapp.data.currentMessage1.json";
  private _currentMsg2Url = "./app/tieapp.data.currentMessage2.json";
  private _currentMsg3Url = "./app/tieapp.data.currentMessage3.json";
  private _currentMsgUrl;

  private currentMessage;
  private currentDoc;
  constructor(private _http: Http) { }

  getMessageList() {
    return this._http.get(this._tieMessageListUrl)
      .map(res => res.json());
  }

  setCurrentMsg(msgId) {
    switch (msgId) {
      case 1: {
        this._currentMsgUrl = this._currentMsg1Url;
        break;
      }
      case 2: {
        this._currentMsgUrl = this._currentMsg2Url;
        break;
      }
      case 3: {
        this._currentMsgUrl = this._currentMsg3Url;
        break;
      }
    }
  };

  getCurrentMsg() {
    return this._http.get(this._currentMsgUrl)
      .map(res => res.json());
  }
}
