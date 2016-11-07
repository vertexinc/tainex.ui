import { Component, OnInit, Input } from '@angular/core';
import { Searchcriteria } from './searchcriteria';

@Component({
  selector: 'tieapp-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
  searchcriteria:Searchcriteria;
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

}
