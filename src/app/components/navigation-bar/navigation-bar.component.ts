import { Component, inject } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle.component';
import { NgOptimizedImage } from '@angular/common';
import { ThemeToggleService } from '../../services/theme-toggle.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  imports: [ThemeToggle, NgOptimizedImage, MatButtonModule],
})
export class NavigationBar {
  themeState = inject(ThemeToggleService).theme;
  brandLogoPath = 'assets/icons/car-space-logo.svg';
}
