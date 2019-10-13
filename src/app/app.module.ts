import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { MianpageComponent } from './mianpage/mianpage.component';
import { InformationComponent } from './information/information.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PersoninfComponent } from './personinf/personinf.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { HaslogedComponent } from './hasloged/hasloged.component';
import { OrderComponent } from './order/order.component';
import { MinicartComponent } from './minicart/minicart.component';
import { LogincartComponent } from './logincart/logincart.component';
import { Detailpage2Component } from './detailpage2/detailpage2.component';
import { Detailpage3Component } from './detailpage3/detailpage3.component';
import { Detailpage4Component } from './detailpage4/detailpage4.component';
import { Detailpage5Component } from './detailpage5/detailpage5.component';
import { FetchService } from './fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    MianpageComponent,
    InformationComponent,
    DetailpageComponent,
    PersoninfComponent,
    CartComponent,
    AddressComponent,
    LoginComponent,
    DetailsComponent,
    HaslogedComponent,
    OrderComponent,
    MinicartComponent,
    LogincartComponent,
    Detailpage2Component,
    Detailpage3Component,
    Detailpage4Component,
    Detailpage5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    FetchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
