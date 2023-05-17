import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.css']
})
export class VinosComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
