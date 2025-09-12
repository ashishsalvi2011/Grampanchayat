import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language } from '../../language';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,  MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup;

  constructor(public langService: Language, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

   submitForm() {
    if (this.contactForm.valid) {
      alert(this.langService.currentLang === 'en' 
        ? 'Thank you for your message! We will get back to you soon.' 
        : 'तुमच्या संदेशाबद्दल धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.');
      this.contactForm.reset();
    }
  }

}
