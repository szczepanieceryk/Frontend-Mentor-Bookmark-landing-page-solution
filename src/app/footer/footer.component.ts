import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  // content for newsletter
  newsTitle = "Stay up-to-date with what we’re doing";
  newsSmall = '35,000+ already joined';

  // value for input placeholder
  inputPlaceholder="Enter your email adress" 

  // validation of email input
  newsletterForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  get email(){
    return this.newsletterForm.get('email');
  }

  constructor() { }

  ngOnInit(): void {
  }

  //function submitting the form
  onFormSubmit(){
    console.log(this.newsletterForm)
    alert("You're successfully subscribed to our newsletter 😁");
   
  }
}
