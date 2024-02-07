import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() cardTitle: string = "Macaco super feliz"
  @Input() discount: number = 0.12
  @Input() price: number = 1200.0
  @Input() rating: number = 4.9
  @Input() thumb: string = "assets/profile.jpg"
}
