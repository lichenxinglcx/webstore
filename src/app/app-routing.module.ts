import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MianpageComponent } from './mianpage/mianpage.component';
import { InformationComponent } from './information/information.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PersoninfComponent } from './personinf/personinf.component';
import { AddressComponent } from './address/address.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { HaslogedComponent } from './hasloged/hasloged.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { MinicartComponent } from './minicart/minicart.component';
import { LogincartComponent } from './logincart/logincart.component';
import { Detailpage2Component } from './detailpage2/detailpage2.component';
import { Detailpage3Component } from './detailpage3/detailpage3.component';
import { Detailpage4Component } from './detailpage4/detailpage4.component';
import { Detailpage5Component } from './detailpage5/detailpage5.component';

export const routes: Routes = [
      { path:'', redirectTo:'mainpage', pathMatch:'full'},
      { path: 'mainpage', component: MianpageComponent },
      { path: 'detailpage', component: DetailpageComponent },
      { path: 'detailpage2', component: Detailpage2Component },
      { path: 'detailpage3', component: Detailpage3Component },
      { path: 'detailpage4', component: Detailpage4Component },
      { path: 'detailpage5', component: Detailpage5Component },
      { path: 'register', component: RegisterComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
      { path:'personinf',component:PersoninfComponent },
      { path:'',component:LoginComponent,outlet:'aux2'},
      { path:'hasloged',component:HaslogedComponent ,outlet:'aux2'},
      { path:'',component:LogincartComponent,outlet:'aux3'},
      { path:'logedcart',component:MinicartComponent ,outlet:'aux3'},
      { path:'information',component:InformationComponent,children:[
        { path:'',redirectTo:'personinf', pathMatch:'full'},
        { path:'personinf',component:PersoninfComponent },
        { path:'address',component:AddressComponent },
        { path:'order',component:OrderComponent },
      ]},
      { path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
