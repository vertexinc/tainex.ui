import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';
import { Message } from './body/message';

@Injectable()
export class TieappService {
  private _url = "./app/tieapp.data.json";
  private _currentMsgUrl;
  private __currentMsgUrl1="./app/tieapp.data.messageDetail1.json";
  private __currentMsgUrl2="./app/tieapp.data.messageDetail2.json";
  private __currentMsgUrl3="./app/tieapp.data.messageDetail3.json";
  private message: Message;
  constructor(private _http: Http) { }

  getData(): Observable<any> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  setCurrentMsgURL(messageId) {
    switch (messageId) {
         case 10: {
           this._currentMsgUrl = this.__currentMsgUrl1;
           break;
         }
         case 11: {
           this._currentMsgUrl = this.__currentMsgUrl2;
           break;
         }
         case 12: {
           this._currentMsgUrl = this.__currentMsgUrl3;
           break;
         }
       }

  }

  getCurrentMsg() {
    // return this.message;
    return this._http.get(this._currentMsgUrl)
      .map(res => res.json());
  }
}
