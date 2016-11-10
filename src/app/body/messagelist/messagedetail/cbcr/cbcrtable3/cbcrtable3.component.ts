import { Component, OnInit } from '@angular/core';
import { Cbcrtable3 } from './cbcrtable3';

@Component({
  selector: 'tieapp-cbcrtable3',
  templateUrl: './cbcrtable3.component.html',
  styleUrls: ['./cbcrtable3.component.css']
})
export class Cbcrtable3Component implements OnInit {
  private cbcrtable3: Cbcrtable3;
  private cbcrtable3Data = [
    "This is table 3 details information part1"
    ,
    "This is table 3 details information part2"

  ]
  constructor() {
    this.cbcrtable3 = new Cbcrtable3(this.cbcrtable3Data);
  }

  ngOnInit() {
  }

}
