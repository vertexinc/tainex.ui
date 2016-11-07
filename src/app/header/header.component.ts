import { Component, OnInit, Input } from '@angular/core';
import { Header } from './header'

@Component({
  selector: 'tieapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isLoading = true;

 header: Header;

  constructor() {
    // header = new Header ( "Mex", "user name", "EN", [EN. ] );
    this.header = new Header("Mexican SAT", "Marisol",  ["en","es","zh" ] );
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
