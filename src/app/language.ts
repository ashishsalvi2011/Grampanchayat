import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Language {
    private lang = new BehaviorSubject<'en' | 'mr'>('en');
  currentLang$ = this.lang.asObservable();

  switchLanguage(lang: 'en' | 'mr') {
    this.lang.next(lang);
  }

  get currentLang(): 'en' | 'mr' {
    return this.lang.value;
  }
}
