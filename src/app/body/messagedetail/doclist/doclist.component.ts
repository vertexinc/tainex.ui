import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
@Component({
  selector: 'tieapp-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  @Input() messageDetail;
  @Output() emitCurrentDocId = new EventEmitter<any>();
  @Input() currentDocId;


  constructor() {

  }

  ngOnInit() {
  }

  onSelect(docId) {
    this.currentDocId = docId;
    this.emitCurrentDocId.emit(docId)
  }

  isHighlight(docId) {
    let styles = {
      'background-color': docId === this.currentDocId ? 'lightgreen' : '',

    };
    return styles;
  }
}
