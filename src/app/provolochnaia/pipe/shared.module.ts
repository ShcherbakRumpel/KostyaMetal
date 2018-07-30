
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './calc.pipe';


@NgModule({
    imports: [CommonModule],
    declarations: [ExponentialStrengthPipe],
    exports: [ExponentialStrengthPipe]
})
export class SharedModule { }
