import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CarparkServiceResponse } from '../interfaces/carpark.interface';

export class CarparkService {
  private _http = inject(HttpClient);
  private _carparkDataUrl =
    'https://api.data.gov.sg/v1/transport/carpark-availability';

  getCarparkData(): Observable<CarparkServiceResponse> {
    return this._http.get<CarparkServiceResponse>(this._carparkDataUrl);
  }
}
