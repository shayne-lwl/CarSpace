import { Component, inject, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CarparkService } from './services/carpark.service';
import { CarparkServiceResponse } from './interfaces/carpark.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carkpark-interface',
  templateUrl: './carpark.component.html',
  providers: [CarparkService],
  styleUrl: './carpark.component.scss',
  imports: [CommonModule],
})
export class CarparkComponent implements OnInit {
  private _carparkService = inject(CarparkService);
  public carparkData$: Observable<CarparkServiceResponse> | undefined;

  ngOnInit(): void {
    this.carparkData$ = this._carparkService
      .getCarparkData()
      .pipe(tap((data) => console.log('Carpark data fetched:', data)));
  }
}
