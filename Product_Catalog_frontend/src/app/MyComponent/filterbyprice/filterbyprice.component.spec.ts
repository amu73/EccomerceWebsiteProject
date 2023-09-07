import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbypriceComponent } from './filterbyprice.component';

describe('FilterbypriceComponent', () => {
  let component: FilterbypriceComponent;
  let fixture: ComponentFixture<FilterbypriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterbypriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterbypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
