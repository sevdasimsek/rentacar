import { CarsComponent } from './Components/cars/cars.component'; 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarsComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'brand/:brandId', component: CarsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
