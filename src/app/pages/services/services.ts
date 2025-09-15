import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../language';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
    currentIndex = 0;
  itemsPerPage = 4; 

  constructor(public langService: Language) {}
    schemes = [
    {
      icon: 'water_drop',
      color: 'skyblue',
      titleEn: 'Water Supply',
      titleMr: 'पाणीपुरवठा',
      descriptionEn: 'Clean water facilities for all.',
      descriptionMr: 'सर्वांसाठी स्वच्छ पाणी सुविधा.'
    },
    {
      icon: 'eco',
      color: 'green',
      titleEn: 'Agriculture Support',
      titleMr: 'कृषी सहाय्य',
      descriptionEn: 'Subsidies and training for farmers.',
      descriptionMr: 'शेतकऱ्यांसाठी अनुदान आणि प्रशिक्षण.'
    },
    {
      icon: 'medical_services',
      color: 'orange',
      titleEn: 'Health Services',
      titleMr: 'आरोग्य सेवा',
      descriptionEn: 'Village health and wellness programs.',
      descriptionMr: 'गावातील आरोग्य व कल्याण कार्यक्रम.'
    },
    {
      icon: 'school',
      color: '#673ab7',
      titleEn: 'Education',
      titleMr: 'शिक्षण',
      descriptionEn: 'Better education for children.',
      descriptionMr: 'मुलांसाठी चांगले शिक्षण.'
    },
    {
      icon: 'bolt',
      color: '#ff5722',
      titleEn: 'Electricity',
      titleMr: 'वीजपुरवठा',
      descriptionEn: '24x7 electricity for households.',
      descriptionMr: 'घरांसाठी २४x७ वीजपुरवठा.'
    }
  ];

  @HostListener('window:resize')
  updateItemsPerPage() {
    this.itemsPerPage = window.innerWidth <= 768 ? 1 : 4;
  }

  next() {
    if (this.currentIndex < this.schemes.length - this.itemsPerPage) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
