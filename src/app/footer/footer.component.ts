import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  newsTitle = "Stay up-to-date with what we’re doing";
  newsSmall = '35,000+ already joined';

  newsletterForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  get email(){
    return this.newsletterForm.get('email');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    alert('Formularz wysłany! :D')
  }
}
