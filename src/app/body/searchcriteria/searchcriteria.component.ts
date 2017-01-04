import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Searchcriteria } from './searchcriteria';

@Component({
  selector: 'tieapp-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
  searchcriteria:Searchcriteria;

  @Output() emitCompose = new EventEmitter<any>();
  constructor() {
    this.searchcriteria = new Searchcriteria()
  }


  ngOnInit() {
  }

  showSearch = false;
  isExpanded = false;


  toggle(){
    this.isExpanded = !this.isExpanded;
  }
  onCompose(){
      this.emitCompose.emit();
    }

}
