import { Observable } from 'rxjs';
import { CarGetModel } from './../Models/CarGetModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  getAllCars(): Observable<CarGetModel[]> {
    return this.httpClient.get<CarGetModel[]>('http://localhost:3000/cars?state=1');
  }

  getCars(brandId): Observable<CarGetModel[]> {
    //http://localhost:3000/cars  ?brandId=2            &state=1
    return this.httpClient.get<CarGetModel[]>(
      'http://localhost:3000/cars' + '?brandId=' + brandId + '&state=1'
    );
  }

  getCarsWithState(brandId, state): Observable<CarGetModel[]> {
    //http://localhost:3000/cars  ?brandId=2            &state=1
    return this.httpClient.get<CarGetModel[]>(
      'http://localhost:3000/cars' + '?brandId=' + brandId + '&state=' + state
    );
  }
}
