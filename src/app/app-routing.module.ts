import { BrandDetailComponent } from './Components/brands/brand-detail/brand-detail.component';
import { CarDetailComponent } from './Components/cars/car-detail/car-detail.component';
import { BrandAddComponent } from './Components/brands/brand-add/brand-add.component';
import { CarAddComponent } from './Components/cars/car-add/car-add.component';
import { CarsComponent } from './Components/cars/cars.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'car-add', component: CarAddComponent },
  { path: 'brand/:brandId', component: CarsComponent },
  { path: 'brand-add', component: BrandAddComponent },
  { path: 'brand-detail/:id', component: BrandDetailComponent },
  { path: 'car-detail/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
