import {createAction, props} from "@ngrx/store";


export const addProduct = createAction('[Product Comparison] add product', props<{productCode : string}>());
export const removeProduct = createAction('[Product Comparison] remove product', props<{productCode : string}>());
export const resetComparison = createAction('[Product Comparison] reset');
