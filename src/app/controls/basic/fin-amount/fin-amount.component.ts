import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fin-amount',
  templateUrl: './fin-amount.component.html',
  styleUrls: ['./fin-amount.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FinAmountComponent),
    multi: true,
  }]
})
export class FinAmountComponent implements ControlValueAccessor{
 
  control: FormControl = new FormControl('0');

  disablePaste: boolean = true;

  onChange = (value : any) => {};

  onTouch = (value: any) => {};

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouch: any): void {
    this.onTouch = onTouch;
  }
  setDisabledState?(isDisabled: boolean): void {
     if(isDisabled){
      this.control.disable();
     }else{
      this.control.enable();
    }
  }
      


}
