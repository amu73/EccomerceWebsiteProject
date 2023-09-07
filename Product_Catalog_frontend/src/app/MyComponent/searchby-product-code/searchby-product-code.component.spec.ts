import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyProductCodeComponent } from './searchby-product-code.component';

describe('SearchbyProductCodeComponent', () => {
  let component: SearchbyProductCodeComponent;
  let fixture: ComponentFixture<SearchbyProductCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyProductCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbyProductCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
