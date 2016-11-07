import { Component, OnInit } from '@angular/core';
import { Message } from '../../message';

@Component({
  selector: 'tieapp-message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {

  private currentMessage : Message;
  constructor() {
    this.currentMessage = new Message("Mary", "Cbcr1", "This is cbcr 1", "12-12-2015", "sent", "John",
    "01-01-2016", "Mike@MX.com", "This is cbct document for Mexican SAT", "Warning information", "John, Mike,Tom", "CBC 1", ["CBC","Other"], ["1","2","3"],
    "MX", "US,MX", ["en","ch","es"]);
  }

  ngOnInit() {
  }

}
