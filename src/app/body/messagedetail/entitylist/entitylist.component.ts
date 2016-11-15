import { Component, OnInit,Input } from '@angular/core';
import { Entitylist } from './entitylist';
import { EntitylistRecord } from './entitylistRecord';

@Component({
  selector: 'tieapp-entitylist',
  templateUrl: './entitylist.component.html',
  styleUrls: ['./entitylist.component.css']
})
export class EntitylistComponent implements OnInit {

  @Input() currentDoc;

  constructor() {

  }

  ngOnInit() {
  }

}
