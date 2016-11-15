import { Component, OnInit, Input } from '@angular/core';
import { Header } from './header'

@Component({
  selector: 'tieapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isLoading = true;

 @Input() header:any;

  constructor() {

  }

  ngOnInit() {
     this.setFields({
       "appName": "EU SAT",
       "userName": "John",
       "language": ["en", "es"]
     });
     console.log("OnInit Header");
   }


   // Change all fields of this component
   setFields(hdr: Header) {
     this.header = hdr;
     this.header.appName = "USA SAT";
     console.log("setFields Header");
   }


}
