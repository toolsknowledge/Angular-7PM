import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { lazyRoutes } from './app.routes';
import { mainComponent } from './main.component';
import { pageOneComponent } from './pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    pageOneComponent
  ],
  imports: [
    BrowserModule,
    lazyRoutes
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
