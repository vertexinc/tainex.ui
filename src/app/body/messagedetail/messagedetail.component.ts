import { Component, OnInit } from '@angular/core';
import { CbcrComponent} from './cbcr/cbcr.component';
import { DoclistComponent} from './doclist/doclist.component';
import { EntitylistComponent} from './entitylist/entitylist.component';

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
