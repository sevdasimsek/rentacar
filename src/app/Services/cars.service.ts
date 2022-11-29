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

  getCars(brandId: number): Observable<CarGetModel[]> {
    return this.httpClient.get<CarGetModel[]>(
      this.apiUrl + '?brandId=' + brandId + '&state=1'
    );
  }
  getCarById(id: number): Observable<CarGetModel> {
    return this.httpClient.get<CarGetModel>(this.apiUrl + '/' + id);
  }
  addCar(car: CarGetModel) {
    return this.httpClient.post(this.apiUrl, car);
  }
  updateCar(id: number, car: CarGetModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, car);
  }
  deleteCar(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
