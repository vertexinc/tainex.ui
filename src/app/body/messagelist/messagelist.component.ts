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
  @Output() currentSelectedMessage = new EventEmitter<any>();


  constructor(private _tieappService: TieappService) {


  }


  ngOnInit() {

  }

  onSelect(tieMsgId) {
     this.currentSelectedMessage.emit(tieMsgId);
  }


}
