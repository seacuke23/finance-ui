import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import {ApiModule} from 'something'

@NgModule({
  declarations: [
    AppComponent,
    TransactionTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
//    ApiModule.forRoot(IdentityService.getApiConfiguration);
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
