import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { CartService } from "../services/cart.service";
import * as allActions from "../.";
import { catchError, mergeMap, map, withLatestFrom, switchMap } from "rxjs/operators";
import CartInterface from "../reducer/cart.reducer";
import { dummyService } from "../services/dummy.service";
@Injectable({
    providedIn:"root"
})
export class CartEffets{
    constructor(private service:CartService,
                private actions:Actions,
                private store:Store<CartInterface>,
                private dummy:dummyService){}

    
        @Effect()
        public getCartItems:Observable<Action> = this.actions.pipe(
            ofType(allActions.CartActions.CartLoading),
            mergeMap((action:any)=> this.service.getCartItem(action.id)
                    .pipe(map((posRes)=>{
                        posRes["qty"] = action.qty;
                        //subscription
                        let result = this.store.pipe(select(allActions.cartSelector));
                        result.subscribe((res)=>{
                            window.localStorage.setItem("cart",JSON.stringify( res.finalItems ));
                        });
                        return new allActions.CartLoadingSuccess(posRes);
                    }),catchError((err:any)=>{
                        return of(new allActions.CartLoadingFail(err))
                    })))
            
        );



        // @Effect()
        // public removeItem = this.actions.pipe(
        //     ofType(allActions.CartActions.CartLoading),
        //     mergeMap((action:any)=> this.dummy.dummyFunction(action.id)
        //             .pipe(map((posRes)=>{
        //                 //subscription
        //                 let result = this.store.pipe(select(allActions.cartSelector));
        //                 result.subscribe((res)=>{
        //                     window.localStorage.setItem("cart",JSON.stringify( res.finalItems ));
        //                 });
        //                 return new allActions.CartRemoveItem(action.id)
        //             }),catchError((err:any)=>{
        //                 return of(new allActions.CartLoadingFail(err))
        //             })))
            
        // );

        @Effect() 
        public removeItem = this.actions.pipe(
            ofType("[Cart] Remove Item"),
            map((id:any) => ({type: "[Cart] Remove Item", "id":id})),
          );

       


    


       

                   





   

};
























// import { Injectable } from "@angular/core";
// import { Actions, Effect, ofType } from "@ngrx/effects";
// import { Action, select, Store } from "@ngrx/store";
// import { Observable, of } from "rxjs";
// import { cartService } from "../services/cart.service";
// import * as allActions from "../.";
// import { catchError, mergeMap,map, withLatestFrom } from "rxjs/operators";
// import Cart from "../modal/cart.modal";
// import { CartState } from "../reducer/cart.reducer";

// @Injectable({
//     providedIn:"root"
// })
// export class cartEffects{
//     constructor(private service:cartService,
//                 private actions:Actions,
//                 private store:Store<CartState>){}

//     @Effect()
//     public getCartItems:Observable<Action> = this.actions.pipe(
//         ofType(allActions.CartActions.CartLoading),

//         mergeMap((action:any)=> this.service.getProduct(action.id)
//                                 .pipe(map((posRes:Cart)=>{
//                                     posRes["qty"] = action.qty;
//                                     return new allActions.CartLoadingSuccess(posRes)
//                                 }),catchError((err:any)=>{
//                                     return of(new allActions.CartLoadingFail(err))
//                                 })) )      
//     );


 

// };