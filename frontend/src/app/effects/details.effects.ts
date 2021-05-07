//detailsEffects

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { detailService } from "../services/detail.service";
import * as allActions from "../.";
import { catchError, mergeMap,map, switchMap } from "rxjs/operators";
import  Product  from "../modal/Product";

@Injectable({
    providedIn:"root"
})
export class detailsEffects{
    constructor(private service:detailService,
                private actions:Actions){}

    @Effect()
    public getDetailProduct:Observable<Action> = this.actions.pipe(
        ofType(allActions.DetailsActions.DetailsLoading),
        mergeMap((action:any)=>{
            return this.service.getProductDetails(action.id).pipe(map((posRes:Product)=>{
                return new allActions.DetailsLoadingSuccess(posRes);
            }),catchError((err:any)=>{
                return of(new allActions.DetailsLoadingFail("Network Error"));
            }))
        })
    )
};