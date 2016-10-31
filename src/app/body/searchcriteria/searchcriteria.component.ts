import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tieapp-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showSearch = false;
  isExpanded = false;
  @Input() title: string;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}
