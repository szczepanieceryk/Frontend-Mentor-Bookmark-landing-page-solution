import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  newsTitle = "Stay up-to-date with what we’re doing";
  newsSmall = '35,000+ already joined';

  constructor() { }

  ngOnInit(): void {
  }

}
