import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    viewMode = 'map';
  }

}
