import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { detailsState } from '../reducer/details.reducer';
import * as allActions from "../.";
import Product from '../modal/Product';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'detail',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  id:any;
  loading:boolean;
  final_product:Product;
  error:string;

  //variable
  qty:number;

  dropdown_values:number[]=[];


  //private spinner:SpinnerVisibilityService

  constructor(private routing:ActivatedRoute,
              private store:Store<detailsState>,
              private router:Router,
              private spinner:SpinnerVisibilityService) { 
      this.qty=1;
  };

  ngOnInit(): void {
      this.id = this.routing.snapshot.params["id"];

      //dispatch
      this.store.dispatch(new allActions.DetailsLoading(this.id));


      this.spinner.show();
      //subscription
      let result = this.store.pipe(select(allActions.detailSelector));

     
      result.subscribe((res)=>{
         this.loading = res.loading; 
         this.final_product = res.my_product;
         this.error = res.error;
         
         

         this.dropdown_values = this.createDropDown(this.final_product.countInStock);

         
         this.spinner.hide();
      });
  }

  arr:number[] = [];
  createDropDown(count){
    if( count > 0){
      for(let i:number=1;i<=count;i++){
         this.arr.push(i);
      }
    }
    return this.arr;
}


  addToCart(id:any):any{
      this.router.navigate(["/cart",this.qty,id]);  
  };

}
