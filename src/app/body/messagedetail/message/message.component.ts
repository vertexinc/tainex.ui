import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../message';
import { TieappService } from "../../../tieapp.service";


@Component({
  selector: 'tieapp-message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() messageDetail;
  @Input() languageList;
  @Output() emitSaveChangeAtMessage = new EventEmitter<any>();

  model = new Message();
  OECDMessageTypeList = ['CbC', 'CbCR'];
  OECDMessageTypeIndicList = ['CBC401', 'CBC402']

  constructor(private _tieappService: TieappService) {

  }

  ngOnChanges() {
    this.model.tieMsgId = this.messageDetail.tieMsgId;
    this.model.msgReceiverList = this.messageDetail.msgReceiverList;
    this.model.subject = this.messageDetail.subject;
    this.model.notes = this.messageDetail.notes;
    this.model.warning = this.messageDetail.warning;
    this.model.contact = this.messageDetail.contact;
    this.model.messageType = this.messageDetail.messageType;
    this.model.reportingPeriod = this.messageDetail.reportingPeriod;
    this.model.timestamp = this.messageDetail.timestamp;
  }
  ngOnInit() {

  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    alert("Message to be saved:" + JSON.stringify(this.model));

    // this._tieappService.postSave(this.model)
    //   .subscribe(saveReturnData => {
    //     alert("returning: " + JSON.stringify(saveReturnData))
    //   });
      this.emitSaveChangeAtMessage.emit(this.model);
  }
}
