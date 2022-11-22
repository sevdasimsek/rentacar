import { filter } from 'rxjs';
import { CarsService } from './../../Services/cars.service';
import { BrandsService } from './../../Services/brands.service';
import { Component, OnInit } from '@angular/core';
import { BrandGetModel } from 'src/app/Models/BrandGetModel';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: BrandGetModel[] = [];
  brandName: string;
  filterText: string;
  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandsService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }
}
