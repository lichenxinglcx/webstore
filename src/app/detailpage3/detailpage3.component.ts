import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-detailpage3',
  templateUrl: './detailpage3.component.html',
  styleUrls: ['./detailpage3.component.css']
})
export class Detailpage3Component implements OnInit {
  goods;

  constructor(
    private fetchService:FetchService ,
  ) {
    
   }

   getGoods (){ 
    let goods_id=3;
    this.fetchService.callRestAPI(this.fetchService.URL3+`/${goods_id}`).then(resp => {
    this.goods = resp.list;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
  }

  changeGoods(index){
    this.fetchService.goods_id=index+9;
    console.log("this"+this.fetchService.goods_id);
  }
  
  ngOnInit() {
    this.getGoods();
  }

}
