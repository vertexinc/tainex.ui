import { Component, OnInit, Input } from '@angular/core';
import {TieappService } from '../../tieapp.service';


@Component({
  selector: 'tieapp-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  @Input() messageDetail;
  @Input() currentDoc;


  // private currentDoc = this.messageDetail.tieDocList[0];
  constructor(private _tieappService: TieappService) {
    // this.currentMessageName = this.truncateInfo(this.messageDetail.subject);
    // this.currentDocName = this.truncateInfo(this.currentDoc.name)
  }

  ngOnInit() {

  }

  emitCurrentDocId(docId) {
    //alert(docId);
    this._tieappService.setCurrentDocURL(docId);
    this._tieappService.getCurrentDoc()
      .subscribe(currentDocData => {
        this.currentDoc = currentDocData;
      })
  }

}
