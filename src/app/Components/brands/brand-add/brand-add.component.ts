import { BrandsService } from './../../../Services/brands.service';
import { BrandGetModel } from './../../../Models/BrandGetModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService
  ) {}

  brandAddForm!: FormGroup;
  brand!: BrandGetModel;

  ngOnInit(): void {
    this.createBrandAddForm();
  }
  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      this.brand = Object.assign({}, this.brandAddForm.value);
    }
    this.brandsService
      .addBrand(this.brand)
      .subscribe();
  }
}
