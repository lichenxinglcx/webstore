import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-detailpage2',
  templateUrl: './detailpage2.component.html',
  styleUrls: ['./detailpage2.component.css']
})
export class Detailpage2Component implements OnInit {
  goods;

  constructor(
    private fetchService:FetchService ,
  ) {
    
   }

   getGoods (){ 
    let goods_id=2;
    this.fetchService.callRestAPI(this.fetchService.URL3+`/${goods_id}`).then(resp => {
    this.goods = resp.list;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
  }

  changeGoods(index){
    this.fetchService.goods_id=index+5;
    console.log("this"+this.fetchService.goods_id);
  }

  
  
  ngOnInit() {
    this.getGoods();
  }
}
