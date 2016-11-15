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
    // this._headerService.getHeader()
    //     .subscribe(headerInfo => {
    //       this.isLoading = false;
    //       this.header = {
    //         appName: headerInfo.appName,
    //         userName: headerInfo.userName,
    //         language: headerInfo.language
    //       }
    //     });
  }

}
