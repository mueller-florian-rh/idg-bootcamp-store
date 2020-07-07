import { Component, OnInit } from '@angular/core';
import {ProductCompareService} from "../../service/product-compare.service";
import {ProductDetailOutlets} from "@spartacus/storefront";

@Component({
  selector: 'app-product-comparison-outlets',
  templateUrl: './product-comparison-outlets.component.html',
  styleUrls: ['./product-comparison-outlets.component.scss']
})
export class ProductComparisonOutletsComponent implements OnInit {

  constructor(protected productComparisonService: ProductCompareService) { }

  pdpoutlets = ProductDetailOutlets;

  addProduct(productCode: string)
  {
    this.productComparisonService.addProduct(productCode);
  }

  removeProduct(productCode: string)
  {
    this.productComparisonService.removeProduct(productCode);
  }

  canAddProduct(productCode: string)
  {
    if(this.productComparisonService.canAddProduct() && !this.productComparisonService.isProductInComparison(productCode))
    {
      return true;
    }

    return false;
  }

  isProductInComparison(productCode: string)
  {
    return this.productComparisonService.isProductInComparison(productCode);
  }

  getNumberOfProducts() : number
  {
    return this.productComparisonService.getNumberOfProduct();
  }

  canShowCompareView() : boolean
  {
    return this.productComparisonService.canShowCompareView();
  }

  ngOnInit(): void {
  }


  clearComparison() {
    this.productComparisonService.clearComparison();
  }
}
