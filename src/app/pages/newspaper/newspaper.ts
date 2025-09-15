import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Language } from '../../language';

@Component({
  selector: 'app-newspaper',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './newspaper.html',
  styleUrl: './newspaper.css'
})
export class Newspaper {
  constructor(public langService: Language) {}

currentIndex = 0;
newsClippings = [
  {
    year: '2025',
    titleEn: 'Village Festival Featured in Local News',
    titleMr: 'गाव उत्सव स्थानिक बातम्यांमध्ये',
    descriptionEn: 'Our annual village festival was covered in Sakal newspaper.',
    descriptionMr: 'आपला वार्षिक उत्सव सकाळ मध्ये प्रसिद्ध झाला.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2025',
    titleEn: 'Independence Day Celebration',
    titleMr: 'स्वातंत्र्य दिन सोहळा',
    descriptionEn: 'Lokmat featured our flag hoisting ceremony.',
    descriptionMr: 'लोकमत मध्ये ध्वजारोहण सोहळा प्रसिद्ध झाला.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2024',
    titleEn: 'Cleanliness Campaign News',
    titleMr: 'स्वच्छता अभियान बातमी',
    descriptionEn: 'Pudhari highlighted our village-wide cleanliness drive.',
    descriptionMr: 'पुढारी मध्ये स्वच्छता मोहीम प्रसिद्ध झाली.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2024',
    titleEn: 'Tree Plantation Drive',
    titleMr: 'वृक्षारोपण मोहीम',
    descriptionEn: 'E-Sakal covered the massive tree plantation program in our village.',
    descriptionMr: 'ई-सकाळ मध्ये मोठ्या प्रमाणातील वृक्षारोपण कार्यक्रम प्रसिद्ध झाला.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2023',
    titleEn: 'Digital Gram Panchayat Initiative',
    titleMr: 'डिजिटल ग्रामपंचायत उपक्रम',
    descriptionEn: 'Lokmat Samachar reported on our new online services for villagers.',
    descriptionMr: 'लोकमत समाचार मध्ये गावातील नवे ऑनलाईन सेवा उपक्रम प्रसिद्ध झाले.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2023',
    titleEn: 'Water Conservation Project',
    titleMr: 'पाणी बचत प्रकल्प',
    descriptionEn: 'Agrowon featured our successful water conservation initiative.',
    descriptionMr: 'अ‍ॅग्रोवन मध्ये पाणी बचतीचा यशस्वी उपक्रम प्रकाशित झाला.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2022',
    titleEn: 'Best Panchayat Award',
    titleMr: 'सर्वोत्तम पंचायत पुरस्कार',
    descriptionEn: 'Our Panchayat was awarded as the Best Panchayat in the district.',
    descriptionMr: 'आपली ग्रामपंचायत जिल्ह्यातील सर्वोत्तम पंचायत म्हणून गौरवली गेली.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  },
  {
    year: '2022',
    titleEn: 'Women Self-Help Group Success',
    titleMr: 'महिला बचत गट यशोगाथा',
    descriptionEn: 'Maharashtra Times highlighted the achievements of local SHGs.',
    descriptionMr: 'महाराष्ट्र टाइम्स मध्ये स्थानिक बचत गटांच्या यशोगाथा प्रसिद्ध झाल्या.',
    image: 'https://www.snjb.org/primary-school-marathi/up-images/IMG-20220712-WA0005imgFile62f27a61167fe.jpg'
  }
];


  cardsPerView = 3; // default desktop
  cardWidth = 100 / this.cardsPerView;


  @HostListener('window:resize')
  onResize() {
    this.updateCardsPerView();
  }

  ngOnInit() {
    this.updateCardsPerView();
  }

  updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 576) {
      this.cardsPerView = 1;
    } else if (width <= 1024) {
      this.cardsPerView = 2;
    } else {
      this.cardsPerView = 3;
    }
    this.cardWidth = 100 / this.cardsPerView;
  }

  next() {
    if (this.currentIndex < this.newsClippings.length - this.cardsPerView) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.newsClippings.length - this.cardsPerView;
    }
  }
}
