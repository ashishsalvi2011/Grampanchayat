import { Component, OnInit } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MatIconModule } from '@angular/material/icon';

interface Award1 {
  titleEn: string;
  titleMr: string;
  descriptionEn: string;
  descriptionMr: string;
  year: string;
}


@Component({
  selector: 'app-award',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './award.html',
  styleUrl: './award.css'
})
export class Award  {
    currentIndex = 0;

  awards: Award1[] = [
    { titleEn: 'Best Panchayat Award 2022', titleMr: 'सर्वोत्तम पंचायत पुरस्कार २०२२', descriptionEn: 'Awarded for excellent rural development initiatives.', descriptionMr: 'उत्कृष्ट ग्रामीण विकास उपक्रमांसाठी पुरस्कार.', year: '2022' },
    { titleEn: 'Clean Village Award 2023', titleMr: 'स्वच्छ गाव पुरस्कार २०२३', descriptionEn: 'Recognized for outstanding sanitation and cleanliness programs.', descriptionMr: 'उत्कृष्ट स्वच्छता आणि स्वच्छता कार्यक्रमांसाठी ओळख.', year: '2023' },
    { titleEn: 'Community Welfare Award 2021', titleMr: 'समुदाय कल्याण पुरस्कार २०२१', descriptionEn: 'Honored for welfare schemes benefiting villagers.', descriptionMr: 'गावकऱ्यांना लाभ मिळालेल्या कल्याणकारी योजनांसाठी सन्मानित.', year: '2021' },
    { titleEn: 'Digital Innovation Award 2023', titleMr: 'डिजिटल नाविन्य पुरस्कार २०२३', descriptionEn: 'Awarded for implementing digital solutions in governance.', descriptionMr: 'शासनात डिजिटल उपायांना अंमलात आणल्याबद्दल पुरस्कार.', year: '2023' },
    { titleEn: 'Women Empowerment Award 2022', titleMr: 'महिला सक्षमीकरण पुरस्कार २०२२', descriptionEn: 'Recognized for outstanding initiatives in women empowerment.', descriptionMr: 'महिला सक्षमीकरणातील उत्कृष्ट उपक्रमांसाठी ओळख.', year: '2022' }
  ];


  constructor(public langService: Language) {}

next() {
  if (this.currentIndex + 1 < this.awards.length) {
    this.currentIndex += 1;
  } else {
    this.currentIndex = 0; // loop back
  }
}

prev() {
  if (this.currentIndex - 1 >= 0) {
    this.currentIndex -= 1;
  } else {
    this.currentIndex = this.awards.length - 1; // loop to last
  }
}
}
