import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { PageoneComponent } from './pageone.component';
import { PagetwoComponent } from './pagetwo.component';
import { PagethreeComponent } from './pagethree.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ChildoneComponent } from './childone.component';
import { ChildtwoComponent } from './childtwo.component';
import { ChildthreeComponent } from './childthree.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
