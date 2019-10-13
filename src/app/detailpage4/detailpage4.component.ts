import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-detailpage4',
  templateUrl: './detailpage4.component.html',
  styleUrls: ['./detailpage4.component.css']
})
export class Detailpage4Component implements OnInit {

  goods;

  constructor(
    private fetchService:FetchService ,
  ) {
    
   }

   getGoods (){ 
    let goods_id=6;
    this.fetchService.callRestAPI(this.fetchService.URL3+`/${goods_id}`).then(resp => {
    this.goods = resp.list;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
  }

  changeGoods(index){
    this.fetchService.goods_id=index+21;
    console.log("this"+this.fetchService.goods_id);
  }
  
  ngOnInit() {
    this.getGoods();
  }

}
