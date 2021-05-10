import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import CartInterface, { CART_REMOVE_ITEM } from "../reducer/cart.reducer";
import * as allActions from "../.";
import { SpinnerVisibilityService } from "ng-http-loader";
import CartID from "../modal/cartremove.model";

@Component({
  selector:"cart",
  templateUrl:"./cart.component.html"
})
export class CartComponent{
    qty:number;
    id:any;
    selected_value:number;
    loading:boolean;
    error:string;
    finalArray:any;
    totalCount:number;

    sub_total:any;


    constructor(private route:ActivatedRoute,
                private store:Store<CartInterface>,
                private spinner:SpinnerVisibilityService){}
    ngOnInit(){
        this.qty = this.route.snapshot.params["qty"];
        this.id = this.route.snapshot.params["id"];

        //dispatch
        this.store.dispatch(new allActions.CartLoading(this.id,this.qty));

        
        this.spinner.show();
        //subscription
        let result = this.store.pipe(select(allActions.cartSelector))

        result.subscribe((res)=>{
          this.loading = res.loading;
          this.error = res.error;
          this.finalArray = res.finalItems;
          this.totalCount = this.finalArray.length;
          this.spinner.hide();
        });

    };

    removeItem(id:any){
      this.store.dispatch({
         type:CART_REMOVE_ITEM,
         payload: <CartID> {
            "id" : id,
            "qty" : this.qty
         }
      })
    };




    arr:number[] = [];
    createDropDown(count){
      if( count > 0){
          for(let i:number=1;i<=count;i++){
            this.arr.push(i);
          }
      }
      return this.arr;
    }

}