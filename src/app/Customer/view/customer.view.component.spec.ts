import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer.ViewComponent } from './customer.view.component';

describe('Customer.ViewComponent', () => {
  let component: Customer.ViewComponent;
  let fixture: ComponentFixture<Customer.ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customer.ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customer.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
