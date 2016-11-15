import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';
import { Message } from './body/message';

@Injectable()
export class TieappService {
  private _url = "./app/tieapp.data.json";
  private message: Message;
  constructor(private _http: Http) { }

  getData(): Observable<any> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  setCurrentMsg(message) {

    // this.message = message;

  }

  getCurrentMsg() {
    // return this.message;
  }
}
