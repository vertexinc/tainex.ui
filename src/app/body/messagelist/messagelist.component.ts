import { Component, OnInit, Input } from '@angular/core';
// import { TieMsgService } from '../TieMsg.service';
import { Messagelist } from './messagelist';
import { Message } from '../message';
// import { Messagedetail } from '../messagedetail/messagedetail';

@Component({
  selector: 'tieapp-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  private messageList: Messagelist;

  private messageSumList: Array<Message>;
  static currentMessage: Message;


  //  data Objects
  private messageListData = [
    {
      "user": "Mary",
      "subject": "Cbcr1",
      "description": "This is Cbcr1",
      "date": "12-12-2015",
      "status": "Sent",
       "from": "John"
    },
    {
      "user": "John",
      "subject": "Cbcr2",
      "description": "This is Cbcr2",
      "date": "12-12-2015",
      "status": "Viewed",
       "from": "Mary"
    },
    {
      "user": "Jack",
      "subject": "Cbcr3",
      "description": "This is Cbcr3",
      "date": "12-12-2015",
      "status": "Draft",
      "from": "Lora"
    }
  ];
  private currentMessageData = this.messageListData[0];

  constructor() {

    this.messageList = new Messagelist(this.messageListData, this.currentMessageData);

  }


  ngOnInit() {
    // this._tieMsgService.getTieMsg()
    //   .subscribe(tieMsgInfoList => {
    //
    //     this.tieMsgs = tieMsgInfoList;
    //   });
  }

  onSelect(currentMessage:Message): void{
    currentMessage = currentMessage;
    alert(JSON.stringify(currentMessage));
  }
}
