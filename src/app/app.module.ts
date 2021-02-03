import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavbarComponent}from './navbar/navbar.component'

import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HomeComponent } from './home/home.component';

import {StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,NavbarComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
