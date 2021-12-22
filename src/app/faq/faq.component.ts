import { Component, OnInit } from '@angular/core';

// custom type for questionsAndAnswers Array
type Faq = {
  question:string;
  answer:string;
  idx:string;
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
  isActive :boolean = false;
  // variable to findindex 
  id:string = '';

  // content for FAQ card
  questionsAndAnswers:Array<Faq> = [
    {
      idx:'f1',
      question:'What is Bookmark?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
      idx:'f2',
      question:'How can I request a new browser?',
      answer:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
      idx:'f3',
      question:'Is there a mobile app?',
      answer:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
      idx:'f4',
      question:'What about other Chromium browsers?',
      answer:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ]


  // function for showing the answer for clicked question   
  showAnswer(idx:string){
    if(this.id == idx){
      this.id = '';
    }
    else{
      this.id = idx
      this.isActive = !this.isActive
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
