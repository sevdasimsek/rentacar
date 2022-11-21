import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandGetModel } from './../../../Models/BrandGetModel';
import { BrandsService } from './../../../Services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css'],
})
export class BrandDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private brandsService: BrandsService,
    private formBuilder: FormBuilder
  ) {}
  brand: BrandGetModel;
  brandUpdateForm: FormGroup;
  ngOnInit(): void {
    this.getBrandById();
  }
  getBrandById() {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrands(params['id']);
    });
  }
  getBrands(id) {
    this.brandsService
      .brandGetById(id)
      .subscribe((data) => {this.brand = data
        this.createBrandForm();
      });
  }

  createBrandForm() {
    this.brandUpdateForm = this.formBuilder.group({
      name: [this.brand.name, Validators.required],
    });
  }

  update() {
    this.brandsService
      .updateBrand(
        this.activatedRoute.snapshot.params['id'],
        this.brandUpdateForm.value
      )
      .subscribe((response) => {});
  }
}
