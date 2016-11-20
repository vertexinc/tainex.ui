import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Header } from './header'

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
  private showTieapp = true;
  private showTraining = false;

  constructor() {

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

}
