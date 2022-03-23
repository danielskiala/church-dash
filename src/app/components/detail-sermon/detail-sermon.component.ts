import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-sermon',
  templateUrl: './detail-sermon.component.html',
  styleUrls: ['./detail-sermon.component.css']
})
export class DetailSermonComponent implements OnInit {

  constructor() { }

  addActive = false;

  toggle() {
    if (this.addActive == false) {
      this.addActive = true;
    } else {
      this.addActive = false;
    }
  }
  
  ngOnInit(): void {
  }

}
