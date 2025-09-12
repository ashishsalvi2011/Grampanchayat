import { Component } from '@angular/core';
import { Language } from '../../language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members {
constructor(public langService: Language) {}
}
