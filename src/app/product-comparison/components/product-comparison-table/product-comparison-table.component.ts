import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductService} from "@spartacus/core";
import {ProductCompareService} from "../../service/product-compare.service";

@Component({
  selector: 'app-product-comparison-table',
  templateUrl: './product-comparison-table.component.html',
  styleUrls: ['./product-comparison-table.component.scss']
})
export class ProductComparisonTableComponent implements OnInit {

  products: Array<Observable<Product>> = new Array<Observable<Product>>();

  constructor(protected productComparisonService: ProductCompareService, protected productService: ProductService) {
  }

  canShowCompareView(): boolean {
    return this.productComparisonService.canShowCompareView();
  }

  ngOnInit(): void {
    for (let productCode of this.productComparisonService.getProductCodes()) {
      this.products.push(this.productService.get(productCode))
    }
  }
}
