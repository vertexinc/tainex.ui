import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TieappService } from '../../tieapp.service';


@Component({
  selector: 'tieapp-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  @Input() messageDetail;
  @Input() currentDoc;
  @Input() showTable;
  @Input() language;
  @Output() emitSaveChangeAtMessageDetail = new EventEmitter<any>();

  // private currentDoc = this.messageDetail.tieDocList[0];
  constructor(private _tieappService: TieappService) {
    // this.currentMessageName = this.truncateInfo(this.messageDetail.subject);
    // this.currentDocName = this.truncateInfo(this.currentDoc.name)
  }

  ngOnInit() {

  }

  emitCurrentDocId(docId) {
    //alert(docId);
    // this._tieappService.setCurrentDocURL(docId);
    // this._tieappService.postCurrentDoc(docId)
    // .subscribe(currentDocData => {
    //   this.currentDoc = currentDocData.currentTieDoc
    // })

    this._tieappService.postCurrentDoc(docId)
      .subscribe(currentDocData => {
        this.currentDoc = currentDocData.currentTieDoc
      })
  }

  emitSaveChangeAtMessage(model){
    this.emitSaveChangeAtMessageDetail.emit(model);
  }

  emitAttachedFile(text){
    // alert("emited at messageDetail: " + text);
    this.messageDetail = text.currentMsg
  }


}
