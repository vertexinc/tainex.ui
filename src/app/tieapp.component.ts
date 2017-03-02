import { Component } from '@angular/core';
import { TieappService } from './tieapp.service';
import { Tieapp } from './tieapp'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tieapp-root',
  templateUrl: './tieapp.component.html',
  styleUrls: ['./tieapp.component.css']
})
export class AppComponent {

  public tieapp = {
    header: {
      appName: "",
      userName: "",
      language: []
    },
    body: {
      messageList: {
        messageSumList: []
      },
      messageDetail: {},
      currentDoc: {}

    }
  };

  private tie;
  private showApp = true;
  private showTraining = false;

  constructor(private _tieappService: TieappService) {

  }

  ngOnInit() {
    this.getAppData();

  }
  getAppData() {
    this._tieappService.getData()
      .subscribe(tieMsgData => {

        this.tieapp.header.appName = tieMsgData.appName;
        this.tieapp.header.userName = tieMsgData.username;
        this.tieapp.header.language = tieMsgData.language;

        this.tieapp.body.messageList.messageSumList = tieMsgData.msgList;
        this.tieapp.body.messageDetail = tieMsgData.currentMsg;
        this.tieapp.body.currentDoc = tieMsgData.currentTieDoc

      });
  }

  tieAppShowInfo(showApp) {
    this.showApp = showApp
  }

  trainingShowInfo(showTraining) {
    this.showTraining = showTraining
  }
  emitSaveChangeAtBody(model) {
    //alert("emit applied!");
    // alert(JSON.stringify(model));
    this._tieappService.postSave(model)
      .subscribe(saveReturnData => {
        this.tieapp.body.messageList.messageSumList = saveReturnData.msgList;
        this.tieapp.body.messageDetail = saveReturnData.currentMsg;
        this.tieapp.body.currentDoc = saveReturnData.currentTieDoc;
        alert("Message saved!");
      });
  }
  emitDeleteMsgAtBody(){
    this._tieappService.deleteCurrentMsg()
      .subscribe(tieMsgData => {
        alert("Message deleted")
        this.tieapp.body.messageList.messageSumList = tieMsgData.msgList;
        this.tieapp.body.messageDetail = tieMsgData.currentMsg;
        this.tieapp.body.currentDoc = tieMsgData.currentTieDoc;

      });
  }


}
