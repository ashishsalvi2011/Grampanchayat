import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
 constructor(public langService: Language) {}
}
