import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() messageList;

  @Output() emitMessageId = new EventEmitter<any>();
  //
  @Input() currentSelectedMessageId;
  //private currentSelectedMessageId = this.messageList.currentMessage.tieMsgId;

  constructor(private _tieappService: TieappService) {


  }


  ngOnInit() {

  }
  isHighlight(tieMsgId) {
    let styles = {
      'background-color': tieMsgId === this.currentSelectedMessageId ? 'lightgreen' : '',

    };
    return styles;
  }

  onSelect(tieMsgId) {
    this.currentSelectedMessageId = tieMsgId;
    this.emitMessageId.emit(tieMsgId);
    // alert(JSON.stringify(this.messageList));
    var object = this.messageList[this.messageList.length - 1];
    object.tieMsgId += 1;
    this.messageList.push(object);
  }


}
