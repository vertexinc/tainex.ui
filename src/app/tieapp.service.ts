import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tieapp } from './tieapp';

@Injectable()
export class TieappService {
  private _url = "./app/tieapp.data.json";
  constructor(private _http: Http) { }

  getData(): Observable<Tieapp> {
    return this._http.get(this._url)
      .map(res => res.json());
  }
}
