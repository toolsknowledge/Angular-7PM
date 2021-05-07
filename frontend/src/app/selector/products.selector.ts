import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "../reducer/products.reducer";

export const allProducts = createSelector( createFeatureSelector<IState>("products"),(state:IState)=>{
    return state;
})