import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isExpanded = false;
  @Input() title: string;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}
