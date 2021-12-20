import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // content for features section
  featuresTitle = 'Features';
  featuresTxt = 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.';

  // content for bookmark section
  bookmarkTitle = 'Bookmark in one click';
  bookmarkTxt = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
  
  // content for extensions section
  extensionsTitle = 'Download the extension';
  extensionsTxt = "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.";

  extensionsContent:Array<any> = [
    {
      img:'../../assets/images/logo-chrome.svg',
      title:'Add to Chrome',
      small:'Minimum version 62',
      btnTxt:'Add & Install Extension'
    },
    {
      img:'../../assets/images/logo-firefox.svg',
      title:'Add to Firefox',
      small:'Minimum version 55',
      btnTxt:'Add & Install Extension'
    },
    {
      img:'../../assets/images/logo-opera.svg',
      title:'Add to Opera',
      small:'Minimum version 46',
      btnTxt:'Add & Install Extension'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
