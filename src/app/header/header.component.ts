import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'A Simple Bookmark Manager';
  headerTxt = 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.';
  constructor() { }

  ngOnInit(): void {
  }

}
