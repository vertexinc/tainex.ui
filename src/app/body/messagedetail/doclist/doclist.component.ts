import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
@Component({
  selector: 'tieapp-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

   @Input() messageDetail;
   @Output() emitCurrentDocIndex  = new EventEmitter<any>();;


  constructor() {

  }

  ngOnInit() {
  }

  onSelect(docIndex){
  
    this.emitCurrentDocIndex.emit(docIndex)
  }
}
