import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres-ing',
  templateUrl: './postres-ing.component.html',
  styleUrls: ['./postres-ing.component.css']
})
export class PostresIngComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
