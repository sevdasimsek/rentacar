import { BrandGetModel } from './../../../Models/BrandGetModel';
import { BrandsService } from './../../../Services/brands.service';
import { CarGetModel } from './../../../Models/CarGetModel';
import { CarsService } from './../../../Services/cars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private carsService: CarsService,
    private brandsService: BrandsService
  ) {}

  carAddForm: FormGroup;
  car: CarGetModel[];
  brands: BrandGetModel[];

  ngOnInit(): void {
    this.brandsService.getBrand().subscribe((data) => {
      this.brands = data;
    });
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      //fonksiyon
      brandId: ['', Validators.required], //''default update de dolduruyoruz
      modelName: ['', Validators.required],
      description: ['', Validators.required],
      plate: ['', Validators.required],
      state: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }
  add() {
    this.carsService.addCar(this.carAddForm.value).subscribe((response) => {});
  }
}
