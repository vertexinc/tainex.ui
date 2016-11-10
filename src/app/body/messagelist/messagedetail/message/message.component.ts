import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../message';
import { TieappService } from "../../../../tieapp.service";


@Component({
  selector: 'tieapp-message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() messageDetail;

  constructor(private _tieappService: TieappService) {


  }

  ngOnInit() {
    // this.currentMessage = this._tieappService.getCurrentMsg();
  }


  // ngOnInit() {
  //   // this.currentMessage = this._tieappService.getCurrentMsg();
  //
  //   this._tieappService.getCurrentMsg()
  //       .subscribe(currentMsgData => {
  //
  //           this.currentMessage = currentMsgData;
  //       });
  // }
  // }
  // ngOnInit() {
  //   this._tieappService.getData()
  //       .subscribe(tieMsgData => {
  //
  //           this.tieapp = tieMsgData;
  //       });
  // }

}
