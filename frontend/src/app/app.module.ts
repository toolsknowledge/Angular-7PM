import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './screens/products.component';
import { DetailComponent } from './screens/details.component';
import { CartComponent } from './screens/cart.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './reducer/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './effects/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { Rating } from './screens/rating.component';
import { detailsEffects } from './effects/details.effects';
import { detailsReducer } from './reducer/details.reducer';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cartReducer } from './reducer/cart.reducer';
import { CartEffets } from './effects/cart.effects';
import { SigninComponent } from './screens/signin.component';
import { registerComponent } from './screens/register.component';
import { shippingComponent } from './screens/shipping.component';
import { checkoutComponent } from './screens/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailComponent,
    CartComponent,
    Rating,
    SigninComponent,
    registerComponent,
    shippingComponent,
    checkoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({"products":productsReducer,
                         "detail":detailsReducer,
                         "cart":cartReducer}),
    EffectsModule.forRoot([ProductsEffects,
                           detailsEffects,
                           CartEffets]),
    NgHttpLoaderModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
