import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFinAmountComponent } from './input-fin-amount.component';

describe('InputFinAmountComponent', () => {
  let component: InputFinAmountComponent;
  let fixture: ComponentFixture<InputFinAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFinAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFinAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
