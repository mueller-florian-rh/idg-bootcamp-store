import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {
  ProductDetailOutlets,
} from "@spartacus/storefront";
import {ProductComparisonService} from "../../service/product-comparison.service";

@Component({
  selector: 'app-product-comparison-outles',
  templateUrl: './product-comparison-outles.component.html',
  styleUrls: ['./product-comparison-outles.component.scss']
})
export class ProductComparisonOutlesComponent implements OnInit {

  constructor(protected productComparisonService: ProductComparisonService) { }

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

}
