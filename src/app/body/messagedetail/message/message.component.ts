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

  model = new Message('test');

  constructor(private _tieappService: TieappService) {

  }

  ngOnInit() {
    // alert(JSON.stringify(this.messageDetail))
    JSON.stringify(alert('this.messageDetail' + this.messageDetail));
    JSON.stringify(alert('this.messageDetail.subject' + this.messageDetail.subject));
    this.model.subject = 'test2';
    this.model.description = 'desc2';
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
