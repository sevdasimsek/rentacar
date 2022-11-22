import { CarsService } from './../../Services/cars.service';
import { CarGetModel } from './../../Models/CarGetModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: CarGetModel[] = [];
  filterText:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private carsService: CarsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCar(params['brandId']);
      } else {
        this.getAllCars();
      }
    });
  }

  getAllCars() {
    this.carsService.getAllCars().subscribe((data) => {
      this.cars = data;
    });
  }

  getCar(brandId) {
    this.carsService
      .getCars(brandId)
      .subscribe((data) => (this.cars = data));
  }
}
