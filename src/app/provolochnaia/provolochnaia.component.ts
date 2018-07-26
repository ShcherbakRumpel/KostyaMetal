import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CalcViewModel } from './calc.model';
@Component({
  selector: 'app-provolochnaia',
  templateUrl: './provolochnaia.component.html',
  styleUrls: ['./provolochnaia.component.css']
})
export class ProvolochnaiaComponent implements OnInit {
  ngOnInit(): void {
    this.model = new CalcViewModel();
  }
  // tslint:disable-next-line:member-ordering
  options: FormGroup;

  // tslint:disable-next-line:member-ordering
  model: CalcViewModel;


  onChangeRepeat = (val: any) => {
    this.model.inputFieldValue = val === '' ? 1 : val;
  }

}
