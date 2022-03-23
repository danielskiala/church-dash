import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent implements OnInit {

  constructor() { }

  
  addActive = false;

  toggle() {
    if (this.addActive == false) {
      this.addActive = true;
    } else {
      this.addActive = false;
    }
  }
  
  Filter(){
    const filterInputs:any = document.querySelector(".filter-inputs");

    if(filterInputs.style.maxHeight){
      filterInputs.style.maxHeight = null;
    }else{
      filterInputs.style.maxHeight = filterInputs.scrollHeight + "px";
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
  
  ngOnInit(): void {
  }

}
