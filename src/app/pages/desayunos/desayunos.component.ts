import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-desayunos',
  templateUrl: './desayunos.component.html',
  styleUrls: ['./desayunos.component.css']
})
export class DesayunosComponent implements OnInit {

  avbarOpen = false;

  toggleNavbar() {
    this.avbarOpen = !this.avbarOpen;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
