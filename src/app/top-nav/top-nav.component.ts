import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  // active flag for menu
  isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  // function for openeing mobile mneu
  activeMenu(){
    this.isActive = !this.isActive
  }
}
