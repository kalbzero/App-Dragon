import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Current Year
   */
  currentDate: Date = new Date();
  year: number = this.currentDate.getFullYear();
  
  constructor() { }

  ngOnInit() {
  }

}
