import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detailsState } from "../reducer/details.reducer";

export const detailSelector = createSelector( createFeatureSelector<detailsState>("detail"),(state:detailsState)=>{
    return state;
});