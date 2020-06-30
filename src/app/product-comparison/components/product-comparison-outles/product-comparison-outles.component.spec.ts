import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparisonOutlesComponent } from './product-comparison-outles.component';

describe('ProductComparisonOutlesComponent', () => {
  let component: ProductComparisonOutlesComponent;
  let fixture: ComponentFixture<ProductComparisonOutlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComparisonOutlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparisonOutlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
