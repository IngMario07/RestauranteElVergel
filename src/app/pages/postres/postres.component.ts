import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
