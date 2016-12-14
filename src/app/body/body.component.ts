import { Component, OnInit, Input } from '@angular/core';
import { Body } from "./body";
import {TieappService } from '../tieapp.service';

@Component({
  selector: 'tieapp-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showSearchCriteria = false;

  @Input() body;


  constructor(private _tieappService: TieappService) { }

  ngOnInit() {
  }

  emitMessageId(tieMsgId) {
    // this._tieappService.setCurrentMsgURL(tieMsgId);
    // this._tieappService.postCurrentMsg(tieMsgId)
    //   .subscribe(currentMessageData => {
    //     this.body.messageDetail = currentMessageData.currentMsg;
    //     this.body.currentDoc = currentMessageData.currentTieDoc
    //   })
    this._tieappService.postCurrentMsg(tieMsgId)
      .subscribe(currentMessageData => {
        this.body.messageDetail = currentMessageData.currentMsg;
        this.body.currentDoc = currentMessageData.currentTieDoc
      })
  }

}
