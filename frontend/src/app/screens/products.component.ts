import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IState } from '../reducer/products.reducer';
import * as allActions from "../.";
import Product from '../modal/Product';
import { SpinnerVisibilityService } from 'ng-http-loader';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private store:Store<IState>,
              private spinner:SpinnerVisibilityService) { }

              
  loading:boolean;
  error:string;
  products:Product[];


  ngOnInit(): void {
  
    
    //dispatch
    this.store.dispatch(new allActions.ProductsLoading());

    
    this.spinner.show();
    //subscription
    const result = this.store.pipe(select(allActions.allProducts));
    
    result.subscribe((res)=>{
        this.loading = res.loading;
        this.products = res.products;
        this.error = res.error;
        this.spinner.hide();
    });


  }

}
