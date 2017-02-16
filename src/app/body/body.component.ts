import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Body } from "./body";
import {TieappService } from '../tieapp.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'tieapp-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showSearchCriteria = false;
  currentMsgId;
  showTable = true;

  @Input() body;
  @Input() language;
  @Output() emitSaveChangeAtBody = new EventEmitter<any>();
  @Output() emitDeleteMsgAtBody = new EventEmitter<any>();
  timename: string;
  tempId = 0;

  constructor(private _tieappService: TieappService) {

  }

  ngOnInit() {
  }

  emitMessageId(tieMsgId) {

    this.showTable = true;
    this.currentMsgId = tieMsgId;
    this._tieappService.postCurrentMsg(tieMsgId)
      .subscribe(currentMessageData => {
        this.body.messageDetail = currentMessageData.currentMsg;
        if (currentMessageData.currentTieDoc != null) {
          this.body.currentDoc = currentMessageData.currentTieDoc;
        } else {
          this.showTable = false;
          this.body.currentDoc = { name: "No doc" };

        }
        //TODO: if currentDoc is undefined --> this.showTable = false;
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
        this.timename = 'Angular2'

        let dp = new DatePipe('en-US' /* locale .. */);
        this.timename = dp.transform(new Date(), 'yMdjm');
        this.body.messageDetail.timestamp = this.timename;
        this.body.messageDetail.reportingPeriod = "new";
        this.showTable = false;
      })
  }

  emitCompose() {
    this.showTable = false;
    let msgList = this.body.messageList.messageSumList;
    let objectModel = msgList[msgList.length - 1];
    var copy = JSON.parse(JSON.stringify(objectModel));

    //let newObject = objectModel
    let msgId = copy.tieMsgId
    copy.tieMsgId = this.tempId--;
    copy.subject = "new";
    copy.sender.name = "new";
    copy.description = "new";
    let dp = new DatePipe('en-US' /* locale .. */);
    this.timename = dp.transform(new Date(), 'yMdjm');
    copy.timestamp = this.timename;
    copy.tieMsgState.name = "new";
    this.body.messageList.messageSumList.push(copy);

    this.body.currentDoc = {};
    this.body.messageDetail = {};
    this.body.messageDetail.userName = "new";
    this.body.messageDetail.msgState = "new";
    this.body.messageDetail.timestamp = this.timename;
    this.body.messageDetail.reportingPeriod = "new";
    this.body.messageDetail.tieMsgId = copy.tieMsgId;
    this.body.messageDetail.messageRefId = '1';
    this.body.messageDetail.transmittingCountry = 'MX';
    this.body.messageDetail.receivingCountries = 'US';
    this.body.messageDetail.description = 'CBCR docs';
    this.body.messageTypeIndic = 'CBC401';
    // var object = this.body.messageList[this.body.messageList.length - 1];
    // object.tieMsgId += 1;
    // this.body.messageList.push(object);
  }
  emiteDelete() {

  }
  emitSaveChangeAtMessageDetail(model) {
    this.emitSaveChangeAtBody.emit(model);
  }
  emitDeleteMsgAtMessageDetail() {
    this.emitDeleteMsgAtBody.emit();
  }

}
