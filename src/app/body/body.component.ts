import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Body } from "./body";
import {TieappService } from '../tieapp.service';

@Component({
  selector: 'tieapp-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showSearchCriteria = false;
  currentMsgId;
  showTable = false;

  @Input() body;
  @Input() language;
  @Output() emitSaveChangeAtBody = new EventEmitter<any>();


  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
  }

  emitMessageId(tieMsgId) {

    this.showTable = true;
    this.currentMsgId = tieMsgId;
    this._tieappService.postCurrentMsg(tieMsgId)
      .subscribe(currentMessageData => {
        this.body.messageDetail = currentMessageData.currentMsg;
        this.body.currentDoc = currentMessageData.currentTieDoc
      },
      error => {

        this.body.messageDetail = {};
        this.body.currentDoc = {};
        let msgList = this.body.messageList.messageSumList;
        let objectModel = {};
        if (msgList != null) {
          objectModel = msgList[msgList.length - 1];
        }
        var copy = JSON.parse(JSON.stringify(objectModel));
        this.body.messageDetail.tieMsgId = copy.tieMsgId;
        this.body.messageDetail.userName = "new";
        this.body.messageDetail.msgState = "new";
        this.body.messageDetail.timestamp = "new";
        this.body.messageDetail.reportingPeriod = "new";
        this.showTable = false;
      })
  }

  emitCompose() {

    let msgList = this.body.messageList.messageSumList;
    let objectModel = msgList[msgList.length - 1];
    var copy = JSON.parse(JSON.stringify(objectModel));

    //let newObject = objectModel
    let msgId = copy.tieMsgId
    copy.tieMsgId = 0;
    copy.subject = "new";
    copy.sender.name = "new";
    copy.description = "new";
    copy.timestamp = "new";
    copy.tieMsgState.name = "new";
    this.body.messageList.messageSumList.push(copy);

    this.body.currentDoc = {};
    this.body.messageDetail = {};
    this.body.messageDetail.userName = "new";
    this.body.messageDetail.msgState = "new";
    this.body.messageDetail.timestamp = "new";
    this.body.messageDetail.reportingPeriod = "new";
    this.body.messageDetail.tieMsgId = copy.tieMsgId
    // var object = this.body.messageList[this.body.messageList.length - 1];
    // object.tieMsgId += 1;
    // this.body.messageList.push(object);
  }
  emiteDelete() {

  }
  emitSaveChangeAtMessageDetail(model){
    this.emitSaveChangeAtBody.emit(model);
  }

}
