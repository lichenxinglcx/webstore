import { Component, OnInit, Input } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
   goods;

  constructor(
    public fetchService:FetchService ,
  ) {
    
   }

   getGoods  (){ 
    let goods_id=1;
    this.fetchService.callRestAPI(this.fetchService.URL3+`/${goods_id}`).then(resp => {
    this.goods = resp.list;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
}

changeGoods(index){
  this.fetchService.goods_id=index+1;
  console.log("this"+this.fetchService.goods_id);
}

  
  ngOnInit() {
  
    this.getGoods();
  }



}
