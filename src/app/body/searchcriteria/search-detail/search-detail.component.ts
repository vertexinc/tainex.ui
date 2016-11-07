import { Component, OnInit,Input } from '@angular/core';
import { SearchDetail } from './search-detail';

@Component({
  selector: 'tieapp-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
searchDetail: SearchDetail;
  // constructor() {
  //   this.searchDetail = new SearchDetail(
  //     ["cbcr", "doc"], "Lucy", "USA", "Mary", "USA", "02-02-2016", "02-02-2016",
  //     "MNC Name", ["USA", "RU"], "2012", "2016", ["Finance", "Education"],
  //     [1, 100], [1, 100], [1, 100], [1, 100], [1, 100], [1, 100], [1, 100], [1, 100], [1, 100], [1, 100]
  //   )
  //  }

  constructor() {
    this.searchDetail = new SearchDetail(
      ["cbcr", "doc"], "Lucy", "USA", "Mary", "USA", "02-02-2016", "02-02-2016", "MNC Name", ["USA", "RU"], "2012", "2016", ["Finance", "Education"], [1, 100], [1, 100], [1, 100],
      [1, 100], [1, 100], [1, 100], [1, 100], [1, 100])
  }

  ngOnInit() {
  }

}
