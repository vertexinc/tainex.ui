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

  private messageList: Messagelist;

  private messageSumList: Array<Message>;




  //  data Objects
  private messageListData = [
    {
      "user": "Mary",
      "subject": "Cbcr1",
      "description": "This is Cbcr1",
      "date": "12-12-2015",
      "status": "Sent",
      "from": "John",
      "reportingPeriod": "string",
      "to": "John",
      "notes": "This is note 1",
      "warning": "Warning 1 ",
      "contact": "Mary",
      "OECDMessageRefID": "Cbc1",
      "OECDMessageType": ["CBC", "Other"],
      "OECDMessageTypeIndic": ["1", "2", "3"],
      "sendingCountry": "US",
      "receivingCountry": "US,MX",
      "Language": ["en", "ch", "es"]
    },
    {
      "user": "John",
      "subject": "Cbcr2",
      "description": "This is Cbcr2",
      "date": "12-12-2015",
      "status": "Viewed",
      "from": "Mary",
      "to": "Lora",
      "notes": "This is note 2",
      "warning": "Warning 2 ",
      "contact": "Lucy",
      "OECDMessageRefID": "Cbc2",
      "OECDMessageType": ["CBC", "Other"],
      "OECDMessageTypeIndic": ["1", "2", "3"],
      "sendingCountry": "US",
      "receivingCountry": "US,MX",
      "Language": ["en", "ch"]
    },
    {
      "user": "Jack",
      "subject": "Cbcr3",
      "description": "This is Cbcr3",
      "date": "12-12-2015",
      "status": "Draft",
      "from": "Mary",
      "to": "Lora",
      "notes": "This is note 3",
      "warning": "Warning 3",
      "contact": "Lucy",
      "OECDMessageRefID": "Cbc3",
      "OECDMessageType": ["CBC", "Other"],
      "OECDMessageTypeIndic": ["1", "2", "3"],
      "sendingCountry": "US",
      "receivingCountry": "US,MX",
      "Language": ["en"]
    }
  ];
  private currentMessageData = this.messageListData[0];

  constructor(private _tieappService: TieappService) {

    this.messageList = new Messagelist(this.messageListData, this.currentMessageData);
    this._tieappService.setCurrentMsg(this.messageList.currentMessage);

  }


  ngOnInit() {
    // this._tieMsgService.getTieMsg()
    //   .subscribe(tieMsgInfoList => {
    //
    //     this.tieMsgs = tieMsgInfoList;
    //   });
  }

  onSelect(currentMessage: Message): void {
    currentMessage = currentMessage;
    // this.messageList.setCurrentMsg(currentMessage);
    this._tieappService.setCurrentMsg(currentMessage);
    // alert(JSON.stringify(currentMessage));
  }
}
