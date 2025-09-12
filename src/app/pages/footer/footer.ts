import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,  MatIconModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(public langService: Language) {}
    currentYear: number = new Date().getFullYear();
  newsletterEmail: string = '';

   subscribeNewsletter() {
    if (this.newsletterEmail) {
      alert(this.langService.currentLang === 'en' 
        ? 'Thank you for subscribing to our newsletter!' 
        : 'आमच्या वृत्तपत्राची सदस्यता घेतल्याबद्दल धन्यवाद!');
      this.newsletterEmail = '';
    }
  }
}
