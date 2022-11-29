import { filter } from 'rxjs';
import { CarGetModel } from './../Models/CarGetModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cars'
})
export class CarsPipe implements PipeTransform {

  transform(value: CarGetModel[], filterText: string): CarGetModel[] {
    filterText!=filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter((p:CarGetModel)=> p.modelName.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
