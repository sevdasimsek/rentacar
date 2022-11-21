import { Observable } from 'rxjs';
import { CarGetModel } from './../Models/CarGetModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/cars';

  getAllCars(): Observable<CarGetModel[]> {
    return this.httpClient.get<CarGetModel[]>(this.apiUrl + '?state=1');
  }

  getCars(brandId): Observable<CarGetModel[]> {
    return this.httpClient.get<CarGetModel[]>(
      this.apiUrl + '?brandId=' + brandId + '&state=1'
    );
  }
  getCarById(id): Observable<CarGetModel> {
    return this.httpClient.get<CarGetModel>(this.apiUrl + '/' + id);
  }
  addCar(car): Observable<CarGetModel[]> {
    return this.httpClient.post<CarGetModel[]>(this.apiUrl, car);
  }
  updateCar(id, car): Observable<CarGetModel[]> {
    return this.httpClient.put<CarGetModel[]>(this.apiUrl + '/' + id, car);
  }
  deleteCar(id): Observable<CarGetModel[]> {
    return this.httpClient.delete<CarGetModel[]>(this.apiUrl + '/' + id);
  }
}
