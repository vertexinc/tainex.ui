import { Component, OnInit,Input } from '@angular/core';
import { Footer } from './footer'

@Component({
  selector: 'tieapp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // @Input() footer: Footer;

  constructor() { }

  ngOnInit() {
  }

}
