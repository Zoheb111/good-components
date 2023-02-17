import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinAmountComponent } from './fin-amount.component';

describe('FinAmountComponent', () => {
  let component: FinAmountComponent;
  let fixture: ComponentFixture<FinAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
