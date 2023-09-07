import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachbybrandComponent } from './serachbybrand.component';

describe('SerachbybrandComponent', () => {
  let component: SerachbybrandComponent;
  let fixture: ComponentFixture<SerachbybrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachbybrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachbybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
