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
  private _currentMsgUrl1="./app/tieapp.data.messageDetail1.json";
  private _currentMsgUrl2="./app/tieapp.data.messageDetail2.json";
  private _currentMsgUrl3="./app/tieapp.data.messageDetail3.json";
  private _currentDocUrl;
  private _currentDocUrl1="./app/tieapp.data.doc1.json";
  private _currentDocUrl2="./app/tieapp.data.doc2.json";
  private _currentDocUrl3="./app/tieapp.data.doc3.json";
  private _currentDocUrl4="./app/tieapp.data.doc4.json";

  constructor(private _http: Http) { }

  getData(): Observable<any> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  setCurrentMsgURL(messageId) {
    switch (messageId) {
         case 10: {
           this._currentMsgUrl = this._currentMsgUrl1;
           break;
         }
         case 11: {
           this._currentMsgUrl = this._currentMsgUrl2;
           break;
         }
         case 12: {
           this._currentMsgUrl = this._currentMsgUrl3;
           break;
         }
       }
  }

  setCurrentDocURL(messageId) {
    switch (messageId) {
         case 13: {
           this._currentDocUrl = this._currentDocUrl1;
           break;
         }
         case 14: {
           this._currentDocUrl = this._currentDocUrl2;
           break;
         }
         case 15: {
           this._currentDocUrl = this._currentDocUrl3;
           break;
         }
         case 16: {
           this._currentDocUrl = this._currentDocUrl4;
           break;
         }
       }
  }

  getCurrentMsg() {
    // return this.message;
    return this._http.get(this._currentMsgUrl)
      .map(res => res.json());
  }

  getCurrentDoc() {
    // return this.message;
    return this._http.get(this._currentDocUrl)
      .map(res => res.json());
  }
}
