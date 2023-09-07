import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPriceBrandComponent } from './filter-price-brand.component';

describe('FilterPriceBrandComponent', () => {
  let component: FilterPriceBrandComponent;
  let fixture: ComponentFixture<FilterPriceBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPriceBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPriceBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
