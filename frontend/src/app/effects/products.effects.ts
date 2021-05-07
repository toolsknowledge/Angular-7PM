import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { ProductsService } from "../services/products.service";
import * as allActions from "../.";
import { mergeMap,map, catchError } from "rxjs/operators";
import Product from "../modal/Product";


@Injectable({
    providedIn:"root"
})
export class ProductsEffects{
    constructor(private service:ProductsService,
                private actions:Actions){}

    @Effect()
    public getProducts:Observable<Action> = this.actions.pipe(
        ofType(allActions.ProductsActions.ProductsLoading),
        mergeMap(()=>this.service.getProducts().pipe(map((posRes:Product[])=>{
            return new allActions.ProductsLoadingSuccess(posRes)
        }, catchError((error)=> of(new allActions.ProductsLoadingFail("Network Error"))))))
    );
};