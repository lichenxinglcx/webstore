import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders;

  constructor(
    private fetchService:FetchService ,
  ) { 
    // this.orders={
    //   pay_time:"",
    //   order_id:"",
    //   status:"",
    //   name:"",
    //   num:"",
    //   price:""
    // }
  }

  getOrder= () => this.fetchService.callRestAPI(this.fetchService.URL19).then(resp => {
    // this.postAdress();
    this.orders = [...resp];
    console.log(this.orders);
  // this.addAddress();
  return resp;
  }).catch(error => {
  return Promise.reject(Error(error.message));
  });

  ngOnInit() {
    this.getOrder();
  }

}
