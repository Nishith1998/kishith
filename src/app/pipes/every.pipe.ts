import { Pipe, PipeTransform } from '@angular/core';
import { EventObj } from 'src/app/types';

@Pipe({
  name: 'every',
  pure: false
})
export class EveryPipe implements PipeTransform {

  transform(values: EventObj[], ...args: unknown[]): unknown {
    return values.every(obj => obj.isLoading === true);
  }

}
