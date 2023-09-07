import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbyPriceDescComponent } from './filterby-price-desc.component';

describe('FilterbyPriceDescComponent', () => {
  let component: FilterbyPriceDescComponent;
  let fixture: ComponentFixture<FilterbyPriceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterbyPriceDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterbyPriceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
