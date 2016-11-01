import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TieMsg } from './TieMsg';

@Injectable()
export class TieMsgService {
  private _url = "./app/body/TieMsg.json";
  constructor(private _http: Http) { }

  getTieMsg(): Observable<TieMsg[]> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

}
