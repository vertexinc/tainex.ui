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

  @Input() messageList;



  constructor(private _tieappService: TieappService) {


  }


  ngOnInit() {

  }

  onSelect(currentMessage: Message): void {
    
  }


}
