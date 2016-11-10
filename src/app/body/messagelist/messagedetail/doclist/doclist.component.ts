import { Component, OnInit } from '@angular/core';
import { DoclistRecord } from './doclistRecord';
import { Doclist } from './doclist';
@Component({
  selector: 'tieapp-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DoclistComponent implements OnInit {
  private doclist: Doclist;
  private currentDoc: DoclistRecord;

  private docSumListData = [
    {
      "code": "IndustryCo2",
      "title": "doc13",
      "docType": "Cbcr",
      "reportingEntity": "RU=03389",
      "currency": "USD",
      "residentCountry": "MX",
      "accountingStandard": "US GAAP",
      "reportingPeriod": "2014-12-31"
    },
    {
      "code": "EySampleCorp2",
      "title": "doc14",
      "docType": "Cbcr",
      "reportingEntity": "RU=03389",
      "currency": "USD",
      "residentCountry": "MX",
      "accountingStandard": "US GAAP",
      "reportingPeriod": "2014-12-31"
    }];

  private currentDocData = this.docSumListData[0];
  constructor() {
    this.doclist = new Doclist(this.docSumListData, this.currentDocData);
  }

  ngOnInit() {
  }

}
