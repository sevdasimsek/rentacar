import { BrandGetModel } from './../Models/BrandGetModel';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'brand',
})
export class BrandPipe implements PipeTransform {
  transform(value: BrandGetModel[], filterText: string): BrandGetModel[] {
    filterText!=filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter((p:BrandGetModel)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }
}
