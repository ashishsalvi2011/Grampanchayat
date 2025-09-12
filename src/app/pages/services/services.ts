import { Component } from '@angular/core';
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
  constructor(public langService: Language) {}
}
