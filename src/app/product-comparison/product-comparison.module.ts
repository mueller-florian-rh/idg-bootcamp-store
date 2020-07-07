import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComparisonOutletsComponent} from './components/product-comparison-outlets/product-comparison-outlets.component';
import {OutletRefModule} from "@spartacus/storefront";
import {ProductComparisonTableComponent} from './components/product-comparison-table/product-comparison-table.component';
import {UrlModule} from "@spartacus/core";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  exports: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  bootstrap: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    UrlModule,
    RouterModule
  ]
})
export class ProductComparisonModule {
}
