import { CarGetModel } from './../../../Models/CarGetModel';
import { ActivatedRoute } from '@angular/router';
import { BrandGetModel } from './../../../Models/BrandGetModel';
import { CarsService } from './../../../Services/cars.service';
import { BrandsService } from './../../../Services/brands.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private brandsService: BrandsService,
    private carsService: CarsService
  ) {}

  carUpdateForm!: FormGroup;
  brands!: BrandGetModel[];
  car!: CarGetModel;
  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandsService.getBrands().subscribe((data) => {
      this.brands = data;
      this.getCarById();
    });
  }
  getCarById() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCar(params['id']);
    });
  }

  getCar(id:number) {
    this.carsService.getCarById(id).subscribe((data) => {
      this.car = data;
      this.createCarFrom();
    });
  }
  createCarFrom() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: [this.car.brandId, Validators.required],
      modelName: [this.car.modelName, Validators.required],
      description: [this.car.description, Validators.required],
      color: [this.car.color, Validators.required],
      plate: [this.car.plate, Validators.required],
      state: [this.car.state, Validators.required],
      price: [this.car.price, Validators.required],
      imageUrl: [this.car.imageUrl, Validators.required],
    });
  }
  updateCar() {
    this.carsService
      .updateCar(
        this.activatedRoute.snapshot.params['id'],
        this.carUpdateForm.value
      )
      .subscribe((response) => {});
  }
  deleteCar() {
      this.carsService
        .deleteCar(this.activatedRoute.snapshot.params['id'])
        .subscribe((response) => {});

  }
}
