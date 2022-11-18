import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CarsComponent } from './Components/cars/cars.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CarAddComponent } from './Components/cars/car-add/car-add.component';
import { BrandAddComponent } from './Components/brands/brand-add/brand-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CarsComponent,
    NaviComponent,
    CarAddComponent,
    BrandAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
