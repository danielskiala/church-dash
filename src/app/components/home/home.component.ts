import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  
  Filter(){
    const filterInputs:any = document.querySelector(".filter-inputs");

    if(filterInputs.style.maxHeight){
      filterInputs.style.maxHeight = null;
    }else{
      filterInputs.style.maxHeight = filterInputs.scrollHeight + "px";
    }
  }

}
