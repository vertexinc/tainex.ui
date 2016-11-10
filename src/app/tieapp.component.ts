import { Component } from '@angular/core';
import { TieappService } from './tieapp.service';
import { Tieapp } from './tieapp'

@Component({
  selector: 'tieapp-root',
  templateUrl: './tieapp.component.html',
  styleUrls: ['./tieapp.component.css']
})
export class AppComponent {

  private tieapp: Tieapp;

  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
    // this._tieappService.getData()
    //     .subscribe(tieMsgData => {
    //
    //         this.tieapp = tieMsgData;
    //     });
  }
}
