import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationBar } from './components/navigation-bar/navigation-bar.component';
import { CarparkComponent } from './components/carpark/carpark.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, NavigationBar, CarparkComponent],
})
export class AppComponent implements OnInit {
  public matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  public domSanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {}

  ngOnInit() {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'hero-solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/hero-icons-solid.svg'
      )
    );
  }
}
