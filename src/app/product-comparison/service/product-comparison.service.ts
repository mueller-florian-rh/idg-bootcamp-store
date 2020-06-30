import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductComparisonService {

  private maxNumberOfProducts = 3;

  private productSet: Set<string> = new Set<string>();

  private sessionKey = "product-set";


  public addProduct(productCode) {
    if (this.productSet.size <= this.maxNumberOfProducts && !this.productSet.has(productCode)) {
      console.debug("add: " + productCode);
      this.productSet.add(productCode);
      this.saveToSession()
    }
  };

  public removeProduct(productCode) {
    console.debug("remove: " + productCode)
    this.productSet.delete(productCode);
    this.saveToSession()
  }

  public clearComparison(){
    console.debug("clear")
    this.productSet.clear();
    this.saveToSession()
  }

  public canAddProduct()
  {
    console.debug("can add? ->  " + (this.productSet.size <= this.maxNumberOfProducts));
    return this.productSet.size <= this.maxNumberOfProducts;
  }

  getNumberOfProduct(): number
  {
    console.debug("number oder products:" + this.productSet.size);
    return this.productSet.size;
  }

  isProductInComparison(productCode: string): boolean
  {
    console.debug("product:" + productCode + " in comparison? -> " + this.productSet.has(productCode));
    return this.productSet.has(productCode);
  }

  canShowCompareView(): boolean
  {
    console.debug("can show compare view? -> " + (this.productSet.size > 1));
    return this.productSet.size > 1;
  }

  getProductCodes(): Set<string>
  {
    return this.productSet;
  }

  constructor() {
    if(localStorage.getItem(this.sessionKey) != null)
    {
      this.productSet = new Set<string>(JSON.parse(localStorage.getItem(this.sessionKey)));
    } else {
      this.productSet = new Set<string>();
    }
  }

  saveToSession()
  {
    localStorage.setItem(this.sessionKey, JSON.stringify(Array.from(this.productSet)));
  }



}
