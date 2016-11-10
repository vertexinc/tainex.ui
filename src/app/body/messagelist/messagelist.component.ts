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

  private messageList;
  private currentMessage;

  private messageSumList: Array<Message>;


  constructor(private _tieappService: TieappService) {


  }


  ngOnInit() {
    this._tieappService.getMessageList()
        .subscribe(tieMsgData => {
          this.messageList = tieMsgData;
          this.currentMessage = this.messageList.currentMessage;
        });
    // this.currentMessage = this.messageList.currentMessage;
    // this._tieMsgService.getTieMsg()
    //   .subscribe(tieMsgInfoList => {
    //
    //     this.tieMsgs = tieMsgInfoList;
    //   });

  }

//Set currentMessage
  onSelect(msgId): void {
    //alert(msgId);
    this._tieappService.setCurrentMsg(msgId);
    this._tieappService.getCurrentMsg()
        .subscribe(currentMsgData => {
          this.currentMessage = currentMsgData;
        });
  }


}
