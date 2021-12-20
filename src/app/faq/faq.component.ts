import { Component, OnInit } from '@angular/core';

type Faq = {
  question:string;
  answer:string
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {

  faqTitle = 'Frequently Asked Questions';
  faqTxt = "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.";

  // active flag for showAnswer function
  isActive = false;

  // content for FAQ card
  questionsAndAnswers:Array<Faq> = [
    {
      question:'What is Bookmark?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
      question:'How can I request a new browser?',
      answer:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
      question:'Is there a mobile app?',
      answer:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
      question:'What about other Chromium browsers?',
      answer:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ]

  showAnswer(){
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
