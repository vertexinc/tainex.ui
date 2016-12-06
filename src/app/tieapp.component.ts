import { Component } from '@angular/core';
import { TieappService } from './tieapp.service';
import { Tieapp } from './tieapp'

@Component({
  selector: 'tieapp-root',
  templateUrl: './tieapp.component.html',
  styleUrls: ['./tieapp.component.css']
})
export class AppComponent {

  private tieapp;
  private showApp = true;
  private showTraining = false;

  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
    this._tieappService.getData()
      .subscribe(tieMsgData => {
        this.tieapp = {
          header: {
            appName: tieMsgData.appName,
            userName: tieMsgData.username,
            language: tieMsgData.language
          },
          body: {
            messageList: {
               messageSumList:tieMsgData.msgList,
               currentMessage:tieMsgData.msgList[0]
            },
            messageDetail: tieMsgData.msgList[0]
          }
        };
        alert(JSON.stringify(this.tieapp));
      });
    // this._tieappService.getHeader()
    //     .subscribe(tieData => {
    //         this.header = tieData;
    //         alert(JSON.stringify(tieData));
    //     })

  }

  tieAppShowInfo(showApp) {
    this.showApp = showApp
  }

  trainingShowInfo(showTraining) {
    this.showTraining = showTraining
  }
}
