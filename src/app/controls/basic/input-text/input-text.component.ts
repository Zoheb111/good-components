import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true,
  }]
})
export class InputTextComponent implements ControlValueAccessor{
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
