import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HiltonmainComponent } from './components/hiltonmain/hiltonmain.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { Carousel1Component } from './components/carousel1/carousel1.component';

@NgModule({
  declarations: [
    AppComponent,
    HiltonmainComponent,
    CarouselComponent,
    Carousel2Component,
    Carousel1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
