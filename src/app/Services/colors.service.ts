import { ColorGetModel } from './../Models/ColorGetModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = 'http://localhost:3000/Colors';

  Add(color: ColorGetModel) {
    this.httpClient.post(this.apiUrl, color);
  }
}
