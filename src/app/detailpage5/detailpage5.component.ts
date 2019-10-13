import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-detailpage5',
  templateUrl: './detailpage5.component.html',
  styleUrls: ['./detailpage5.component.css']
})
export class Detailpage5Component implements OnInit {

  goods;

  constructor(
    private fetchService:FetchService ,
  ) {
    
   }

   getGoods (){ 
    let goods_id=5;
    this.fetchService.callRestAPI(this.fetchService.URL3+`/${goods_id}`).then(resp => {
    this.goods = resp.list;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
  }

  changeGoods(index){
    this.fetchService.goods_id=index+17;
    console.log("this"+this.fetchService.goods_id);
  }
  
  ngOnInit() {
    this.getGoods();
  }
}
