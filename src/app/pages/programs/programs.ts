import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './programs.html',
  styleUrl: './programs.css'
})
export class Programs {
  constructor(public langService: Language) {}

  currentIndex = 0; // for carousel scrolling

  programs = [
    {
      year: '2025',
      titleEn: 'Clean Village Initiative',
      titleMr: 'स्वच्छ गाव अभियान',
      descriptionEn: 'Promoting hygiene and cleanliness across the village.',
      descriptionMr: 'गावभर स्वच्छता आणि आरोग्य प्रोत्साहन.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    },
    {
      year: '2024',
      titleEn: 'Women Empowerment Workshop',
      titleMr: 'महिला सक्षमीकरण कार्यशाळा',
      descriptionEn: 'Training and awareness programs for women in the village.',
      descriptionMr: 'गावातील महिलांसाठी प्रशिक्षण आणि जागरूकता कार्यक्रम.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    },
    {
      year: '2023',
      titleEn: 'Digital Literacy Drive',
      titleMr: 'डिजिटल साक्षरता मोहीम',
      descriptionEn: 'Helping villagers adopt digital tools for education and services.',
      descriptionMr: 'शिक्षण आणि सेवांसाठी गावकऱ्यांना डिजिटल साधने शिकवणे.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    },
    {
      year: '2022',
      titleEn: 'Tree Plantation Campaign',
      titleMr: 'वृक्षारोपण मोहीम',
      descriptionEn: 'Planting trees and promoting green initiatives in the village.',
      descriptionMr: 'गावात वृक्ष लावणे आणि पर्यावरणीय उपक्रम चालवणे.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    },    {
      year: '2023',
      titleEn: 'Digital Literacy Drive',
      titleMr: 'डिजिटल साक्षरता मोहीम',
      descriptionEn: 'Helping villagers adopt digital tools for education and services.',
      descriptionMr: 'शिक्षण आणि सेवांसाठी गावकऱ्यांना डिजिटल साधने शिकवणे.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    },
    {
      year: '2022',
      titleEn: 'Tree Plantation Campaign',
      titleMr: 'वृक्षारोपण मोहीम',
      descriptionEn: 'Planting trees and promoting green initiatives in the village.',
      descriptionMr: 'गावात वृक्ष लावणे आणि पर्यावरणीय उपक्रम चालवणे.',
      image: 'https://static.pib.gov.in/WriteReadData/userfiles/image/image002WEW8.jpg'
    }
  ];

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.programs.length - 4) { // show 4 cards at a time
      this.currentIndex++;
    }
  }
}
