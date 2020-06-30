import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {ConfigModule, UrlModule} from "@spartacus/core";
import {MediaModule, OutletRefModule} from "@spartacus/storefront";
import { ProductComparisonOutlesComponent } from './components/product-comparison-outles/product-comparison-outles.component';
import {staticRoutes} from "./components/static/static-cms.config";
import {ProductComparisonTableComponent} from "./components/product-comparison-table/product-comparison-table.component";


@NgModule({
  declarations: [ProductComparisonOutlesComponent, ProductComparisonTableComponent],
  imports: [
    RouterModule.forChild(staticRoutes),
    CommonModule,
    RouterModule,
    UrlModule,
    OutletRefModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          compare: {paths: ['compare']}
        }
      },
    }),
    MediaModule,
  ],
  exports: [ProductComparisonOutlesComponent, ProductComparisonTableComponent],
  bootstrap: [ProductComparisonOutlesComponent, ProductComparisonTableComponent],
})
export class ProductComparisonModule { }
