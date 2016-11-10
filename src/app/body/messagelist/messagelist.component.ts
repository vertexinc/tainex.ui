import { Component, OnInit, Input } from '@angular/core';
import { TieappService } from "../../tieapp.service";
import { Messagelist } from './messagelist';
import { Message } from '../message';
// import { Messagedetail } from '../messagedetail/messagedetail';

@Component({
  selector: 'tieapp-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {


  private currentMessage;

  private messageSumList;


  constructor(private _tieappService: TieappService) {


  }

  isHighlight(msgId) {
    let styles = {
      'background-color': msgId === this.currentMessage.tieMsgId ? 'lightgreen' : '',

    };
    return styles;
  }

  ngOnInit() {
    this._tieappService.getMessageList()
      .subscribe(tieMsgData => {
        this.messageSumList = tieMsgData.messageSumList;
        this.currentMessage = tieMsgData.currentMessage;
      });
  }

  //Set currentMessage
  onSelect(msgId): void {
    this._tieappService.setCurrentMsg(msgId);
    this._tieappService.getCurrentMsg()
      .subscribe(currentMsgData => {
        this.currentMessage = currentMsgData;
      });
  }


}
