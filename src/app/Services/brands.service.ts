import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandGetModel } from '../Models/BrandGetModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private httpClient: HttpClient) {}

  apiUrl: string = 'http://localhost:3000/brands';

  getBrands(): Observable<BrandGetModel[]> {
    return this.httpClient.get<BrandGetModel[]>(this.apiUrl);
  }
  brandGetById(id:number): Observable<BrandGetModel> {
    return this.httpClient.get<BrandGetModel>(this.apiUrl + '/' + id);
  }
  addBrand(brand:BrandGetModel){
    return this.httpClient.post(this.apiUrl, brand);
  }
  updateBrand(id:number, brand:BrandGetModel) {
    return this.httpClient.put(this.apiUrl + '/' + id, brand);
  }
}
