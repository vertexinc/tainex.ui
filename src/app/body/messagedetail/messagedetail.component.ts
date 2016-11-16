import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'tieapp-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  @Input() messageDetail;

  // private currentDoc = this.messageDetail.tieDocList[0];
  constructor() {

  }

  ngOnInit() {

  }

  emitCurrentDocId(docId){
    alert(docId);
    //this.messageDetail.currentDocIndex = docIndex;
  }
}
