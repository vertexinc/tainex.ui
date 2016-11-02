import { Component, OnInit,Input } from '@angular/core';
// import { TieMsgService } from '../TieMsg.service';
import { Messagelist } from './messagelist';

@Component({
  selector: 'tieapp-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  @Input() tieMsgs: Messagelist[];
  // private selectedTieMsg:TieMsg;


  constructor() { }

  ngOnInit() {
    // this._tieMsgService.getTieMsg()
    //   .subscribe(tieMsgInfoList => {
    //
    //     this.tieMsgs = tieMsgInfoList;
    //   });
  }

  // onSelect(tieMsgInfo:TieMsg): void{
  //   this.selectedTieMsg = tieMsgInfo;
  // }
}
