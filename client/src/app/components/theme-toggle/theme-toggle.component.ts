import { Component, OnInit, Signal, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ThemeToggleService } from '../../services/theme-toggle.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  imports: [CommonModule, MatIcon],
})
export class ThemeToggle implements OnInit {
  themeToggleService: ThemeToggleService = inject(ThemeToggleService);
  themeState = this.themeToggleService.theme;

  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeToggleService.toggle();
  }
}
