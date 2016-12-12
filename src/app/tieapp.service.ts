import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';
import { Message } from './body/message';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TieappService {
  private _url = "tieapp.data.json";
  //  private _url = "./app/tieapp.tieMainPageData.json";
  private _currentMsgUrl;
  private currentUrl = 'login';
  private _currentMsgUrl1 = "./app/tieapp.data.messageDetail1.json";
  private _currentMsgUrl2 = "./app/tieapp.data.messageDetail2.json";
  private _currentMsgUrl3 = "./app/tieapp.data.messageDetail3.json";
  private _currentDocUrl;
  private _currentDocUrl1 = "./app/tieapp.data.doc1.json";
  private _currentDocUrl2 = "./app/tieapp.data.doc2.json";
  private _currentDocUrl3 = "./app/tieapp.data.doc3.json";
  private _currentDocUrl4 = "./app/tieapp.data.doc4.json";



  constructor(private _http: Http) { }

  getData(): Observable<any> {
    // return this._http.get(this._url)
    //   .map(res => res.json());
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let param =  JSON.stringify({action:"initPage"});
  //   let param = {
  //   "userId": 11,
  //   "id": 11,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "quia et suscipi"
  // };
    //  return this._http.get(this._url)
    return this._http.post(this.currentUrl, param, options)
      .map(res => res.json());
  }

  // getHeader(): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
  //   let options = new RequestOptions({ headers: headers });
  //   let param =  JSON.stringify({action:"initPage"});
  // //   let param = {
  // //   "userId": 11,
  // //   "id": 11,
  // //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // //   "body": "quia et suscipi"
  // // };
  //   alert("posted")
  //   //  return this._http.post(this.textPostUrl, param, options)
  //   return this._http.post(this.currentUrl, param, options)
  //     .map(res => res.json());
  // }

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

  postCurrentMsg(messageId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let temp = "action=selectCurrentMsg" + "&msgid=" + messageId;
    alert(temp);
    return this._http.post(this.currentUrl, temp, options) // ...using post request
      .map(res => res.json());// ...and calling .json() on the response to return data
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
