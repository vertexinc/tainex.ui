import { Component, OnInit,Input } from '@angular/core';
import { Cbcrtable3 } from './cbcrtable3';

@Component({
  selector: 'tieapp-cbcrtable3',
  templateUrl: './cbcrtable3.component.html',
  styleUrls: ['./cbcrtable3.component.css']
})
export class Cbcrtable3Component implements OnInit {
  @Input() currentDoc;

  constructor() {

  }

  ngOnInit() {
  }

}
