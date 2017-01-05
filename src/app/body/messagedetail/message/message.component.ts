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

  constructor(private _tieappService: TieappService) {

  }

  ngOnInit() {

  }
  model = new Message();
  get diagnostic() { return JSON.stringify(this.model); }
}
