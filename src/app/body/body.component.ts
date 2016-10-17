import { Component, OnInit } from '@angular/core';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';
import { MessagelistComponent } from './messagelist/messagelist.component';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
