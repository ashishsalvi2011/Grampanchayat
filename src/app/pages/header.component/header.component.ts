import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Language } from '../../language';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public langService: Language) {}
    menuOpen = false;

    switchLanguage(lang: 'en' | 'mr') {
    this.langService.switchLanguage(lang);
  }



toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}
}
