import {CmsPageGuard} from "@spartacus/storefront";
import {Routes} from "@angular/router";
import {ProductComparisonTableComponent} from "../product-comparison-table/product-comparison-table.component";



export const staticRoutes: Routes = [
  {
    path: 'compare',
    component: ProductComparisonTableComponent,
    data: { pageLabel: '/compare' },
    canActivate: [CmsPageGuard],
  },
];


