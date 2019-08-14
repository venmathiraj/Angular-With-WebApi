import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common'; 
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ProductComponent} from './Product/product.component';
import {CreateProductComponent} from './Product/create-product/create-product.component';
import {DataServiceService} from './data-service.service';
import {Product} from './Product/product';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },DataServiceService,Product],
  bootstrap: [AppComponent]
})
export class AppModule { }
