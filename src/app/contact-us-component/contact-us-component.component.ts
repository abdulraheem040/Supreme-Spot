import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact-us-component',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive,MatIconModule,FormsModule, ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,NgIf],
  templateUrl: './contact-us-component.component.html',
  styleUrl: './contact-us-component.component.scss'
})
export class ContactUsComponentComponent {
  constructor(private router:Router){}
  emailAddress1: string = 'clearbusinessbyadrian@gmail.com';

  email = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  reviewFormControl = new FormControl('', Validators.required);
  nameError: String = 'Name is Required';
  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
