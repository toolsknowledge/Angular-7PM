import { createFeatureSelector, createSelector } from "@ngrx/store";
import CartInterface from "../reducer/cart.reducer";

export const cartSelector = createSelector(createFeatureSelector<CartInterface>("cart"),(state:CartInterface)=>{
    return state;
})




















// import { createFeatureSelector, createSelector } from "@ngrx/store";
// import { CartState } from "../reducer/cart.reducer";

// export const cartSelector = createSelector( createFeatureSelector<CartState>("cart"), (state:CartState)=>{
//     return state;
// })