import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
