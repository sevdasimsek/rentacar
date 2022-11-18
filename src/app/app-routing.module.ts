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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
