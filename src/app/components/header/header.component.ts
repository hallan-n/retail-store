import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLinkActive, ButtonComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {}
