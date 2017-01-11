import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../message';
import { TieappService } from "../../../tieapp.service";


@Component({
  selector: 'tieapp-message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() messageDetail;
  @Input() language;

  model = new Message();

  constructor(private _tieappService: TieappService) {

  }

  ngOnChanges() {
    this.model.msgReceiverList = this.messageDetail.msgReceiverList;
    this.model.subject = this.messageDetail.subject;
    this.model.notes = this.messageDetail.notes;
    this.model.warning = this.messageDetail.warning;
    this.model.contact = this.messageDetail.contact;
  }
  ngOnInit() {

  }

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    alert("Message to be saved:" + JSON.stringify(this.model));

    this._tieappService.postSave(this.model)
      .subscribe(saveReturnData => {
        alert(saveReturnData)
      })
  }
}
