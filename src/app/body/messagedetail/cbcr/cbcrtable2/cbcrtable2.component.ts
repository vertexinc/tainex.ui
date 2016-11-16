import { Component, OnInit,Input } from '@angular/core';
import { Cbcrtable2 } from './cbcrtable2'

@Component({
  selector: 'tieapp-cbcrtable2',
  templateUrl: './cbcrtable2.component.html',
  styleUrls: ['./cbcrtable2.component.css']
})
export class Cbcrtable2Component implements OnInit {
@Input() currentDoc;

  constructor() {

  }

  ngOnInit() {
  }

}
