import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCompareService {

  private maxNumberOfProducts = 3;

  private productSet: Set<string> = new Set<string>();

  private sessionKey = "product-set";

  public addProduct(productCode) {
    if (this.productSet.size <= this.maxNumberOfProducts && !this.productSet.has(productCode)) {
      this.productSet.add(productCode);
      this.saveToSession()
    }
  };

  public removeProduct(productCode) {
    this.productSet.delete(productCode);
    this.saveToSession()
  }

  public clearComparison() {
    this.productSet.clear();
    this.saveToSession()
  }

  public canAddProduct() {
    return this.productSet.size <= this.maxNumberOfProducts;
  }

  getNumberOfProduct(): number {
    return this.productSet.size;
  }

  isProductInComparison(productCode: string): boolean {
    return this.productSet.has(productCode);
  }

  canShowCompareView(): boolean {
    return this.productSet.size > 1;
  }

  getProductCodes(): Set<string> {
    return this.productSet;
  }

  constructor() {
    if (localStorage.getItem(this.sessionKey) != null) {
      this.productSet = new Set<string>(JSON.parse(localStorage.getItem(this.sessionKey)));
    } else {
      this.productSet = new Set<string>();
    }
  }

  saveToSession() {
    localStorage.setItem(this.sessionKey, JSON.stringify(Array.from(this.productSet)));
  }
}
