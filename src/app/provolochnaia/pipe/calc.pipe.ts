import { Pipe, PipeTransform } from '@angular/core';
import { CalcViewModel } from '../calc.model';

@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
  transform(val: CalcViewModel, param1: number, param2: string, param3: string): number {
    // if (model.inputFieldValue == null || model.markSelect == null || model.tolshinaSelect == null) {
    //   return;
    // } else {
    return (param1 * 10 * parseFloat(param2)) / parseFloat(param3);
    // }
  }

  // transform(value: number, exponent: string): number {
  //   const exp = parseFloat(exponent);
  //   return Math.pow(value, isNaN(exp) ? 1 : exp);
  // }
}
