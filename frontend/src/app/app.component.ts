import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import CartInterface from './reducer/cart.reducer';
import * as allActions from "./.";
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  countVar:number;

  constructor(private store:Store<CartInterface>,
             private spinner:SpinnerVisibilityService){}


  ngOnInit(){
      this.spinner.show();
      const result = this.store.pipe(select(allActions.cartSelector))
      result.subscribe((res)=>{
        this.countVar = res.finalItems.length;
        this.spinner.hide();
      })

  }

}
