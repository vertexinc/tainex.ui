import { Component, OnInit,Input } from '@angular/core';
import { Cbcrtable1 } from './cbcrtable1';

@Component({
  selector: 'tieapp-cbcrtable1',
  templateUrl: './cbcrtable1.component.html',
  styleUrls: ['./cbcrtable1.component.css']
})
export class Cbcrtable1Component implements OnInit {

@Input() currentDoc;

  constructor() {

  }

  ngOnInit() {
  }

}
