import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './menu/sideBar/side-bar/side-bar.component';


import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
