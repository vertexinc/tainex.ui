import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
import { TieappService } from "../../../tieapp.service";

@Component({
  selector: 'tieapp-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {

  @Input() messageDetail;
  @Output() emitCurrentDocId = new EventEmitter<any>();
  @Input() currentDocId;
  @Output() emitAttachedFile = new EventEmitter<any>();
  file: File;
  detach = false;

  constructor(private _tieappService: TieappService) {

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
    let text = "";
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    let reader = new FileReader();
    reader.onload = file => {
      let contents: any = file.target;
      text = contents.result;
      console.log(text);
      this._tieappService.postDoc(text)
        .subscribe(docData => {
          this.emitAttachedFile.emit(docData);
          //alert("docAttached: " + JSON.stringify(docData));
        });
    }
    reader.readAsText(this.file);
  }

  onClick(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    target.value = null
  }

  onDetach(){
    this.detach = true;
  }
  onConfirm(){
    this.detach = false;
  }
  onCancel(){
    this.detach = false;
  }
  onClickCheckBox(event){

  alert("selected : " + event.target.value)
  }
}
