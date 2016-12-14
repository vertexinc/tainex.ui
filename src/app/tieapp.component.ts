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
  // private tieapp: Observable<any>;
  private tie;
  private showApp = true;
  private showTraining = false;

  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
    this._tieappService.getData()
      .subscribe(tieMsgData => {
        // pageData = transformRawDataToPageStructure( rawData ); transform the given data structure into the exact structure of the pages
        // updateScreen( pageData )

        this.tieapp.header.appName = tieMsgData.appName;
        this.tieapp.header.userName = tieMsgData.username;
        this.tieapp.header.language = tieMsgData.language;

        this.tieapp.body.messageList.messageSumList = tieMsgData.msgList;
        this.tieapp.body.messageDetail =tieMsgData.currentMsg;
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
