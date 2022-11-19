import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandGetModel } from '../Models/BrandGetModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private httpClient: HttpClient) {}

  apiUrl:string='http://localhost:3000/Brands';
  
  getBrand(): Observable<BrandGetModel[]> {
    return this.httpClient.get<BrandGetModel[]>(
      this.apiUrl
    );
  }
  addBrand(brand):Observable<BrandGetModel[]>{
    return this.httpClient.post<BrandGetModel[]>(this.apiUrl, brand)
  }
}
