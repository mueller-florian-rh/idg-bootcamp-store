import { createReducer, on } from '@ngrx/store';
import {addProduct, removeProduct, resetComparison} from "./product-comparison-actions";

export const productCodes = new Set<string>();

/*const _comparisonReducer = createReducer(productCodes,
  on(increment, productCodes.add()),
  on(decrement, state => state - 1),
  on(resetComparison,  productCodes.clear())
);

export function counterReducer(state, action) {
  return _comparisonReducer(state, action);
}

*/
