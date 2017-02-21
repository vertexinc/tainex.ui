import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
import { TieappService } from "../../../tieapp.service";
import { LoadingAnimateService } from 'ng2-loading-animate';
declare var $: any;


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
  @Output() emitDetachedDocIdList = new EventEmitter<any>();
  @Output() emitCheckMsgWhenAttach = new EventEmitter<any>();
  file: File;
  detach = false;
  attachedFile = false;
  detachList = [];
  loading = false;

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
      //let message know that there one file already attached and don't need to save the current message
      this.loading = true;
      this._tieappService.postDoc(text)
        .subscribe(docData => {
          this.emitAttachedFile.emit(docData);
          this.loading = false;
          // this.attachedFile = true;
          // this.emitCheckMsgWhenAttach.emit(this.attachedFile);
          //alert("docAttached: " + JSON.stringify(docData));
        },
        err => $('#errModalLong').modal('show')
        );
    }
    reader.readAsText(this.file);
  }

  onClick(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    target.value = null
  }

  onDetach() {
    // this.detach = true;
    let idList = ""
    for (let valueItem of this.detachList) {
      idList += valueItem + ','
    }
    idList = idList.substring(0, idList.length - 1);
    if (idList.length > 0) {
      // this.emitDetachedDocIdList.emit(idList);
      this._tieappService.postDetachedDocId(idList)
        .subscribe(docData => {
          this.emitDetachedDocIdList.emit(docData)
          alert(JSON.stringify(docData));
          console.log("return value after detachment: " + JSON.stringify(docData))
        })
    }
    this.detachList = [];

  }
  onConfirm() {
    // this.detach = false;
  }
  onCancel() {
    // this.detach = false;
  }
  onClickCheckBox(event) {
    // if the list contains the event value , remove it from the list
    if (this.detachList.length === 0) {
      this.detachList.push(event.target.value);
    } else {
      for (let valueItem of this.detachList) {
        if (event.target.value === valueItem) {
          let i = this.detachList.indexOf(valueItem);
          this.detachList.splice(i, 1);
          return;
        }
      }
      this.detachList.push(event.target.value);
    }
  }
}
