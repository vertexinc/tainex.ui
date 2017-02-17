import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';
import { Message } from './body/message';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TieappService {
  //private _url = "tieapp.data.json";
  private _url = "./app/tieapp.data.json";
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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "initPage" });

    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._url)
      .map(res => res.json());
  }

  resetMsgandDoc():Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "reset" });

    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._url)
      .map(res => res.json());
  }

  deleteCurrentMsg(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "deleteMsg" });

    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._url)
      .map(res => res.json());

  }

  //Detach Doc
  postDetachedDocId(docIdList): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "detachDoc", docIdListString: docIdList });
    return this._http.post(this.currentUrl, param, options)
      .map(res => res.json());
  }

  //Attach doc
  postDoc(docString): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "saveDoc", docString: docString });
    // alert("ready to save doc: " + param)
    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._currentMsgUrl)
      .map(res => res.json());

  }

  postSave(model): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "save", tieMsg: model });
    // alert("ready to post" + param)
    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._currentMsgUrl)
      .map(res => res.json());

  }

  postCurrentMsg(messageId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "selectCurrentMsg", messageId: messageId });
    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._currentMsgUrl)
      .map(res => res.json());
  }

  postCurrentDoc(docId): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let headers = new Headers({ 'Content-Type': 'text/plain; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let param = JSON.stringify({ action: "selectCurrentDoc", docId: docId });
    return this._http.post(this.currentUrl, param, options)
      //return this._http.get(this._currentDocUrl)
      .map(res => res.json());
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
