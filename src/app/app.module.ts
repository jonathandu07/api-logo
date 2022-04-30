import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { ArdechoComponent } from './logo/ardecho/ardecho.component';
import { BaseComponent } from './logo/base/base.component';
import { EnyoComponent } from './logo/enyo/enyo.component';
import { HephaistosComponent } from './logo/hephaistos/hephaistos.component';
import { HestiaComponent } from './logo/hestia/hestia.component';
import { IdentiteComponent } from './logo/identite/identite.component';
import { KarenComponent } from './logo/karen/karen.component';
import { MetisComponent } from './logo/metis/metis.component';
import { ValeriaComponent } from './logo/valeria/valeria.component';
import { YhwhComponent } from './logo/yhwh/yhwh.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ArdechoComponent,
    BaseComponent,
    EnyoComponent,
    HephaistosComponent,
    HestiaComponent,
    IdentiteComponent,
    KarenComponent,
    MetisComponent,
    ValeriaComponent,
    YhwhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
