import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinAmountComponent } from './fin-amount/fin-amount.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputFinAmountComponent } from './input-fin-amount/input-fin-amount.component';



@NgModule({
  declarations: [
    FinAmountComponent,
    InputTextComponent,
    InputNumberComponent,
    InputFinAmountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FinAmountComponent
  ]
})
export class BasicModule { }
