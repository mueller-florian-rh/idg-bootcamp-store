import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparisonTableComponent } from './product-comparison-table.component';

describe('ProductComparisonTableComponent', () => {
  let component: ProductComparisonTableComponent;
  let fixture: ComponentFixture<ProductComparisonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComparisonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
