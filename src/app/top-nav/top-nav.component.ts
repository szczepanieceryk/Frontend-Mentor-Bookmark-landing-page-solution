import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(){
    this.isActive = !this.isActive
  }
}
