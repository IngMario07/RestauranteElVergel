import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breacfast',
  templateUrl: './breacfast.component.html',
  styleUrls: ['./breacfast.component.css']
})
export class BreacfastComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
