import { Component, OnInit,Input } from '@angular/core';
import { Body } from "./body";

@Component({
  selector: 'tieapp-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showSearchCriteria=false;

  // @Input() body:Body;
  constructor() { }

  ngOnInit() {
  }

}
