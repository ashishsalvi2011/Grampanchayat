import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language } from '../../language';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-visitors',
  standalone:true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './visitors.html',
  styleUrl: './visitors.css'
})
export class Visitors {
 constructor(public langService: Language) {}

   currentIndex = 0;

  visitors = [
    {
      year: '2023',
      nameEn: 'Dr. John Smith',
      nameMr: 'डॉ. जॉन स्मिथ',
      descriptionEn: 'Renowned scientist in artificial intelligence and machine learning.',
      descriptionMr: 'कृत्रिम बुद्धिमत्ता आणि मशीन लर्निंगमधील ख्यातनाम शास्त्रज्ञ.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    },
    {
      year: '2022',
      nameEn: 'Dr. Sarah Johnson',
      nameMr: 'डॉ. सारा जॉन्सन',
      descriptionEn: 'Leading environmental activist and author on climate change.',
      descriptionMr: 'पर्यावरण कार्यकर्त्या आणि हवामान बदल विषयावरील लेखिका.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    },
    {
      year: '2022',
      nameEn: 'Prof. Michael Chen',
      nameMr: 'प्रो. मायकेल चेन',
      descriptionEn: 'Esteemed economist and advisor to financial institutions.',
      descriptionMr: 'आदरणीय अर्थतज्ज्ञ आणि वित्तीय संस्थांचे सल्लागार.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    },
    {
      year: '2021',
      nameEn: 'Dr. Emma Wilson',
      nameMr: 'डॉ. एम्मा विल्सन',
      descriptionEn: 'Pioneer in medical research, genomics, and personalized medicine.',
      descriptionMr: 'वैद्यकीय संशोधन, जीनोमिक्स आणि वैयक्तिकृत औषधोपचारातील अग्रेसर.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    },
    {
      year: '2021',
      nameEn: 'Mr. David Brown',
      nameMr: 'श्री. डेव्हिड ब्राऊन',
      descriptionEn: 'Innovative tech entrepreneur and philanthropist.',
      descriptionMr: 'नवोन्मेषी तंत्रज्ञान उद्योजक आणि परोपकारी.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    },
    {
      year: '2020',
      nameEn: 'Prof. Lisa Anderson',
      nameMr: 'प्रो. लिसा अँडरसन',
      descriptionEn: 'Historian specializing in cultural studies and post-colonial literature.',
      descriptionMr: 'संस्कृती अभ्यास आणि उपनिवेशोत्तर साहित्यातील इतिहासकार.',
      image: 'https://c8.alamy.com/comp/G2GEFA/indian-prime-minister-narendra-modi-tours-the-khasi-tribal-heritage-G2GEFA.jpg'
    }
  ];

    prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.visitors.length - 4) { // show 4 at a time
      this.currentIndex++;
    }
  }
}
