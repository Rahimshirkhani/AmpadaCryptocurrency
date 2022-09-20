import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Menu/sideBar/side-bar.component';


import { SlideMenuModule } from 'primeng/slidemenu';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from "primeng/knob";
import { ChartModule } from 'primeng/chart';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopBarComponent } from './menu/top-bar/top-bar.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
  //  NgxEchartsModule.forRoot({
   //   echarts: () => import('echarts')
   // }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlideMenuModule,
    KnobModule,
    ChartModule,
    TabViewModule,
    ButtonModule,


    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
