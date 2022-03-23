import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addActive = false;

  toggle() {
    if (this.addActive == false) {
      this.addActive = true;
    } else {
      this.addActive = false;
    }
  }
  
  showModal(event:Event){
    event.preventDefault();
    const dashModal = document.querySelector('.dash-modal');
    dashModal?.classList.add('active');
  }

  closeModal(event:Event){
    event.stopPropagation();
    const dashModal = document.querySelector('.dash-modal');
    dashModal?.classList.remove('active');
  }

  stopPropagation(event:Event){
    event.stopPropagation();
  }
}
