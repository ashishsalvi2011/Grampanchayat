import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-achievements',
  standalone:true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements {
    currentIndex = 0;
 constructor(public langService: Language) {}

achievements = [
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'All Roads Paved', 
    titleMr: 'सर्व रस्ते पक्के आहेत', 
    descriptionEn: 'All roads in the Gram Panchayat are paved.', 
    descriptionMr: 'ग्रामपंचायत हद्दीतील सर्व रस्ते पक्के आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Open Defecation Free', 
    titleMr: 'हगणदारी मुक्त आहे', 
    descriptionEn: 'Open defecation free village (household toilets).', 
    descriptionMr: 'घरोघरी शौचालय' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Home Solar Panels', 
    titleMr: 'होम सोलार', 
    descriptionEn: 'All houses have home solar panels.', 
    descriptionMr: 'गावातील सर्व घराना होम सोलार आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Solar Street Lights', 
    titleMr: 'सोलार लाईट', 
    descriptionEn: '40 solar lights installed in the village and on roads.', 
    descriptionMr: 'गावात व गावातील रस्तेवर सोलार लाईट(४०) आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Street Light Poles', 
    titleMr: 'स्ट्रीट लाईट पोल', 
    descriptionEn: '48 street light poles installed.', 
    descriptionMr: 'गावातील स्ट्रीट लाईट पोल (४८) आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Women Empowerment', 
    titleMr: 'महिला रोजगार', 
    descriptionEn: 'Women employment initiatives: 2 e-rickshaws, 17 women savings groups, 2 village committees.', 
    descriptionMr: 'गावातील महिलांचा रोजगार वाढवण्यासाठी (२) ई-रिक्शा, महिला बचतगट (१७) आणि ग्रामसंघ (२) आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Beautiful Village Award', 
    titleMr: 'सुंदर गाव पुरस्कार', 
    descriptionEn: 'Awarded "Beautiful Village" by the government in 2020-21 and 2023-24.', 
    descriptionMr: 'शासनाकडून तालुका स्पर्धेत २०२०-२०२१ आणि २०२३-२०२४ सुंदर गाव म्हणून पुरस्कार दिला आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Dream Village', 
    titleMr: 'स्वप्नातील गाव', 
    descriptionEn: 'Selected as a "Dream Village" by Swadesh Foundation.', 
    descriptionMr: 'स्वदेश संस्थेकडून स्वप्नातील गाव करण्यात आले आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Festivals Celebration', 
    titleMr: 'सण एकत्र साजरे', 
    descriptionEn: 'All festivals celebrated together in the village.', 
    descriptionMr: 'गावातील सर्व सण एकोप्याने साजरे करतात' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'CCTV Security', 
    titleMr: 'सुरक्षा CCTV', 
    descriptionEn: 'CCTV installed for security purposes.', 
    descriptionMr: 'गावात सुरक्षा दृष्टिकोनातून CCTV लावण्यात आले आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Cleanliness Basins', 
    titleMr: 'स्वच्छता बेसिन', 
    descriptionEn: 'Basins installed for cleanliness and wastewater management.', 
    descriptionMr: 'गावातील स्वच्छतेसाठी गावात थूकने साठी बेसिन व त्यावर पाण्याची टाकी लावण्यात आली आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Water Supply', 
    titleMr: 'पिण्याचे पाणी', 
    descriptionEn: 'Water taps installed for clean water availability.', 
    descriptionMr: 'आरोग्याच्या दृष्टीने शरीराला पिण्याचे पाणी मिळावे यासाठी गावात प्रती तास वाजनारा सायरण लावण्यात आले आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Community Toilets', 
    titleMr: 'सभागृह शौचालय', 
    descriptionEn: 'All community halls have personal toilets and sanitation facilities.', 
    descriptionMr: 'गावातील सर्व सभागृहाना व्यक्तिगत शौचालय व स्वच्छता गृह आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Functional Drains', 
    titleMr: 'गटारे बधिंस्त', 
    descriptionEn: 'All village drains are functional.', 
    descriptionMr: 'गावातील सर्व गटारे बधिंस्त आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Tree Plantation', 
    titleMr: 'झाडे लागवड', 
    descriptionEn: 'Trees planted and maintained for environmental protection.', 
    descriptionMr: 'पर्यावरणाच्या दृष्टीने झाडे लावण्यात आली आहेत व त्यांचे संगोपन करण्यात आले आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Open Gym', 
    titleMr: 'ओपन जिम', 
    descriptionEn: 'Open gym installed for youth health and fitness.', 
    descriptionMr: 'गावच्या तरुणांसाठी आरोग्यासाठी ओपन जिम लावण्यात आली आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Household Dustbins', 
    titleMr: 'घरातील डस्टबिन', 
    descriptionEn: 'Wet and dry dustbins provided in each house for village cleanliness.', 
    descriptionMr: 'गाव स्वच्छ राहावा म्हणून घराघरात ओला व कोरडा कचरा साठी डस्टबिन देण्यात आले आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Large Dustbins', 
    titleMr: 'मोठे डस्टबिन', 
    descriptionEn: 'Large dry waste bins installed at multiple locations in the village.', 
    descriptionMr: 'गावात ठिकठिकाणी सूखा कचरा साठी मोठे डस्टबिन ठेवण्यात आले आहेत' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Garbage Collection', 
    titleMr: 'कचरा उचलणारी गाडी', 
    descriptionEn: 'Garbage collection vehicle collects wet and dry waste daily.', 
    descriptionMr: 'गावात ओला व सूका कचरा उचलण्यासाठी घंटागाडी रोज ठराविक वेळेस फिरते' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Plastic Collection Shed', 
    titleMr: 'प्लास्टिक संकलन शेड', 
    descriptionEn: 'Plastic collection shed installed in the Gram Panchayat area.', 
    descriptionMr: 'प्लास्टिक संकलन शेड ग्रामपंचायत हद्दीत लावण्यात आले आहे' 
  },
  { 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9FFoY9wXRPmvmVQ4DH_rgRTijs_OXd0hn2eJhn5k9H7H0NpRtcFfoQZ3oM6Oq3ZlxCg&usqp=CAU', 
    titleEn: 'Compost & Waste Management', 
    titleMr: 'कंपोस्ट व घनकचरा व्यवस्थापन', 
    descriptionEn: 'Compost kits and solid waste management facilities implemented.', 
    descriptionMr: 'ओला कचरा विल्हेवाटीसाठी कंपोस्ट किट व घनकचरा व्यवस्थापन बांधकाम केले आहे' 
  }
];

    prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    if (this.currentIndex < this.achievements.length - 4) this.currentIndex++;
  }
}
