import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComparisonOutletsComponent} from './components/product-comparison-outlets/product-comparison-outlets.component';
import {CmsPageGuard, MediaModule, OutletRefModule} from "@spartacus/storefront";
import {ProductComparisonTableComponent} from './components/product-comparison-table/product-comparison-table.component';
import {ConfigModule, UrlModule} from "@spartacus/core";
import {RouterModule, Routes} from "@angular/router";

export const compareRoutes: Routes =
  [
    {
      path: 'compare',
      component: ProductComparisonTableComponent,
      data: {pageLabel: '/compare'},
      canActivate: [CmsPageGuard],
    }
  ];


@NgModule({
  declarations: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  exports: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  bootstrap: [ProductComparisonOutletsComponent, ProductComparisonTableComponent],
  imports: [
    RouterModule.forChild(compareRoutes),
    ConfigModule.withConfig({
      routing: {
        routes: {
          compare: {paths: ['compare']}
        }
      },
    }),
    CommonModule,
    OutletRefModule,
    UrlModule,
    RouterModule,
    MediaModule
  ]
})
export class ProductComparisonModule {
}
