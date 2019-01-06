import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  showTwoPages = false;
  frontToBackPageOrder = true;
  
  leftPage : any;
  rightPage : any;
  

  constructor() { }

  ngOnInit() {
  }

  loadPreviousPage() {

  }

  loadNextPage() {

  }

}
