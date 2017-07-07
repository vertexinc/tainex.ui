import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from './header';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'tieapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isLoading = true;

  @Input() header: any;
  @Output() tieAppShowInfo = new EventEmitter<any>();
  @Output() trainingShowInfo = new EventEmitter<any>();
  @Output() logoutAtHeader = new EventEmitter<any>();
  private showTieapp = true;
  private showTraining = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es", "zh", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');

  }

  ngOnInit() {

  }

  tieAppOnlick() {
    this.showTieapp = true;
    this.showTraining = false;
    this.tieAppShowInfo.emit(this.showTieapp);
    this.trainingShowInfo.emit(this.showTraining);
  }

  trainingOnclick() {
    this.showTieapp = false;
    this.showTraining = true;
    this.tieAppShowInfo.emit(this.showTieapp);
    this.trainingShowInfo.emit(this.showTraining);
  }

  logout() {
    this.logoutAtHeader.emit();
  }

}
