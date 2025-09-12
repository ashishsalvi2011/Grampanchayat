import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public langService: Language) {}
slides = [
    {
      image: 'https://images.unsplash.com/photo-1581578021517-5d87abf50ab0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      titleEn: 'Welcome to Our Gram Panchayat',
      titleMr: 'आमच्या ग्रामपंचायतीत आपले स्वागत आहे',
      descEn: 'We work for better roads, water, and facilities.',
      descMr: 'आम्ही चांगल्या रस्ते, पाणी आणि सोयीसुविधांसाठी काम करतो.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      titleEn: 'Development for All',
      titleMr: 'सर्वांसाठी विकास',
      descEn: 'Empowering the village with modern facilities.',
      descMr: 'गावाला आधुनिक सुविधांनी सक्षम करणे.'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      titleEn: 'Clean & Green Village',
      titleMr: 'स्वच्छ आणि हिरवेगार गाव',
      descEn: 'We believe in sustainability and cleanliness.',
      descMr: 'आम्ही शाश्वतता आणि स्वच्छतेवर विश्वास ठेवतो.'
    }
  ];

  currentIndex = 0;
  autoSlideInterval: any;



  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
