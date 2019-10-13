import { Component, OnInit, ElementRef } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts;
  sum=0;
  num:FormGroup;
  order;
  userinf;
  goods_id;
  mygood;
  thisgood;
  addressesList = [];
  address1:FormGroup;


  constructor(
    private fetchService:FetchService ,
    private formbuilder:FormBuilder,
  ) {

    this.num= this.formbuilder.group({
      num:''
    })

    this.order={
      pay_time:"",
      order_id:"",
      goods_id:"",
      num:0,
      goods_class_id:"",
      price:0,
      status:"",
      goods_name:"",
      express_num:"",
      username:"",
      phone:"",
      address:""    
    }

    this.userinf={
      username:"",
      phone:""
    }

    this.address1= this.formbuilder.group({
      address:''
    })



   }

//    getGoods = () => this.fetchService.callRestAPI(this.fetchService.URL9).then(resp => {
//     this.mygood = [...resp];
//     console.log(this.mygood);
    
    
//     this.order.price=1999;

//     console.log(this.mygood);
//     this.thisgood=this.mygood[0];
//     this.thisgood.num=1;
//     this.order.goods_name=this.thisgood.goods_name;
//     this.order.goods_id=this.thisgood.goods_id;
//     this.order.num=this.thisgood.num;
//     this.order.goods_class_id=this.thisgood.goods_class_id;
//     this.order.price=this.thisgood.price;
//     this.order.username=this.userinf.username;
//     this.order.phone=this.userinf.phone;
    
    
// }).catch(error => {
//   return Promise.reject(Error(error.message));
// });


getAddresses = () => this.fetchService.callRestAPI(this.fetchService.URL14).then(resp => {  
    this.addressesList = [...resp];   // ?
    // this.showaddressesHTML();
    return resp;
}).catch(error => {
    return Promise.reject(Error(error.message));
});

getUserInform() {
  this.fetchService.callRestAPI(this.fetchService.URL12).then(resp => {
      this.userinf = resp;
      console.log(this.userinf);
      this.order.username=this.userinf.username;
      this.order.phone=this.userinf.phone;
      return resp;
  }).catch(error => {
      return Promise.reject(Error(error.message));
  })
}

postOrder(){
  
  this.order.address=this.address1.value.address;
  this.fetchService.callRestAPI(this.fetchService.URL18, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(this.order)
}).then(resp => {
    console.log('addedorder -->', resp);
    this.order.order_id=resp.order_id;
    console.log(this.order);
    let length=this.carts.length;
    for(let i=0;i<length;i++){
      this.remove(i);
    }
    // this.removeAll();
    return resp;
}).catch(error => {
    return Promise.reject(Error(error.message));
});
}

  getCart= () => this.fetchService.callRestAPI(this.fetchService.URL9).then(resp => {
    // this.postAdress();
    this.carts = [...resp];
    console.log(this.carts);
    //更改总价格
    this.sum=0;
    for(let i=0;i<this.carts.length;i++){
      this.sum=this.sum+this.carts[i].num*this.carts[i].price;
    }
   //更改订单状态
    this.mygood=this.carts;
    let length=this.mygood.length;
    this.order.goods_name="";
    this.order.num="";
    for(let i=0;i<length;i++){
    this.order.goods_name=this.order.goods_name+this.mygood[i].goods_name+";";
    this.order.num=this.order.num.toString()+this.mygood[i].num.toString();
    }
    this.order.price=this.sum;
  // this.addAddress();
  return resp;
  }).catch(error => {
  return Promise.reject(Error(error.message));
  });

  remove(index){
    let id=this.carts[index].cart_id;
    this.fetchService.callRestAPI(this.fetchService.URL17 + `/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      console.log('result from delete', resp);
      return resp;
    }).then(()=>{
      this.getCart();
    }
    ).catch(error => {
      return Promise.reject(Error(error.message));
    });
  }

  // removeAll(){
  //   this.fetchService.callRestAPI(this.fetchService.URL23 , {
  //     method: 'DELETE'
  //   }).then(resp => {
  //     console.log('result from delete', resp);
  //     return resp;
  //   }).then(()=>{
  //     this.getCart();
  //   }
  //   ).catch(error => {
  //     return Promise.reject(Error(error.message));
  //   });
  // }

  autoChange(index){
    let id=this.carts[index].cart_id;
    let goods_name=this.carts[index].goods_name;
    let goods_class_name=this.carts[index].goods_class_id;//todo
    let price=this.carts[index].price;
    let num=this.num.value.num;

    let newgood={
      cart_id:id,
      goods_name:goods_name,
      goods_class_name:goods_class_name,
      price:price,
      num:num
    }
    

    this.fetchService.callRestAPI(this.fetchService.URL10, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newgood)
    }).then(() => this.fetchService.callRestAPI(this.fetchService.URL9).then(resp => {
      // this.postAdress();
      this.carts = [...resp];
      //更改总价格
      this.sum=0
      for(let i=0;i<this.carts.length;i++){
        this.sum=this.sum+this.carts[i].num*this.carts[i].price;
      }

      //更改订单状态
    this.mygood=this.carts;
    let length=this.mygood.length;
    this.order.goods_name="";
    this.order.num="";
    for(let i=0;i<length;i++){
    this.order.goods_name=this.order.goods_name+this.mygood[i].goods_name+";";
    this.order.num=this.order.num.toString()+this.mygood[i].num.toString();
    }
    this.order.price=this.sum;

      console.log(this.carts);
    // this.addAddress();
    return resp;
    })).catch(error => {
        return Promise.reject(Error(error.message));
    });
  }



  ngOnInit() {
    this.getCart();
    this.getUserInform();
    // this.getGoods();
    this.getAddresses();
    
  }

}
