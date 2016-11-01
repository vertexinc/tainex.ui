import { Component, OnInit } from '@angular/core';
import { TieMsgService } from '../TieMsg.service';
import { TieMsg } from '../TieMsg';

@Component({
  selector: 'tieapp-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {

  private tieMsgs: TieMsg[];
  private selectedTieMsg:TieMsg;


  constructor(private _tieMsgService: TieMsgService) { }

  ngOnInit() {
    this._tieMsgService.getTieMsg()
      .subscribe(tieMsgInfoList => {

        this.tieMsgs = tieMsgInfoList;
      });
  }

  onSelect(tieMsgInfo:TieMsg): void{
    this.selectedTieMsg = tieMsgInfo;
  }
}
