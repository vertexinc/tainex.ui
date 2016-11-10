import { Component, OnInit } from '@angular/core';
import { Entitylist } from './entitylist';
import { EntitylistRecord } from './entitylistRecord';

@Component({
  selector: 'tieapp-entitylist',
  templateUrl: './entitylist.component.html',
  styleUrls: ['./entitylist.component.css']
})
export class EntitylistComponent implements OnInit {
  private entitylist: Entitylist;
  private flag = true;
  private entitylistData = [
    {
      "tin": "10001",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 1,
      "address": "address info1",
      "mainEntity": "IndustryCo"
    },
    {
      "tin": "10002",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 0,
      "address": "address info2",
      "mainEntity": "IndustryCo"
    },
    {
      "tin": "10003",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 0,
      "address": "address info3",
      "mainEntity": "IndustryCo"
    },{
      "tin": "10004",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 0,
      "address": "address info4",
      "mainEntity": "IndustryCo"
    },{
      "tin": "10005",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 1,
      "address": "address info5",
      "mainEntity": "IndustryCo"
    },{
      "tin": "10006",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 1,
      "address": "address info6",
      "mainEntity": "IndustryCo"
    },
    {
      "tin": "10007",
      "name": "Global...",
      "entityCode": "Global...",
      "docType": "CBCR",
      "incorporationCode": "Global...",
      "resident": "CA",
      "isPE": 0,
      "address": "address info7",
      "mainEntity": "IndustryCo"
    }
  ];
  constructor() {
    this.entitylist = new Entitylist(this.entitylistData);
  }

  ngOnInit() {
  }

}
