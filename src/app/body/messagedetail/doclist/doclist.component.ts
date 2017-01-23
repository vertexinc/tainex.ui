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
  file: File;

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

  onChange(event: EventTarget) {
    this.file = null;
    alert("starts to read");
    let text = "";
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    alert(this.file.name);

    let reader = new FileReader();
    reader.onload = file => {
      let contents: any = file.target;
      text = contents.result;
      alert(text);
      console.log(text);
    }
    reader.readAsText(this.file);
  }
}
