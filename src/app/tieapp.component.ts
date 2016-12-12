import { Component } from '@angular/core';
import { TieappService } from './tieapp.service';
import { Tieapp } from './tieapp'

@Component({
  selector: 'tieapp-root',
  templateUrl: './tieapp.component.html',
  styleUrls: ['./tieapp.component.css']
})
export class AppComponent {

  private tieapp = {
    header:{
      appName:"",
      userName:"",
      language:[]
    },
    body:{
      messageList:{
        messageSumList:[]
      },
      messageDetail:{},
      currentDoc:{}

    }
  };
  private tie;
  private showApp = true;
  private showTraining = false;

  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
    this._tieappService.getData()
      .subscribe(tieMsgData => {

        this.tieapp.header.appName = tieMsgData.appName;
        this.tieapp.header.userName = tieMsgData.username;
        this.tieapp.header.language = tieMsgData.language;

        this.tieapp.body.messageList.messageSumList = tieMsgData.msgList;
        this.tieapp.body.messageDetail =tieMsgData.currentMsg,
        this.tieapp.body.currentDoc = tieMsgData.currentTieDoc

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
