import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {
  carts;

  constructor(
    private fetchService:FetchService,
  ) { }

  ngOnInit() {
    this.getCart();
  }

  getCart= () => this.fetchService.callRestAPI(this.fetchService.URL9).then(resp => {
    // this.postAdress();
    this.carts = [...resp];
    console.log(this.carts);
  // this.addAddress();
  return resp;
  }).catch(error => {
  return Promise.reject(Error(error.message));
  });
}
