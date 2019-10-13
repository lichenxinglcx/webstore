import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  goods_id;
  mygood=[];
  thisgood;
  addressesList = [];
  order;
  userinf;
  address1:FormGroup;
  comment;
  showcomment;
  allcomment;
  stars;
  grade;

  constructor(
    public fetchService:FetchService,
    private formbuilder:FormBuilder
  ) { 
    this.thisgood={
      
      goods_class_id:"",
      goods_name:"",
      price:"",
      goods_id:"",
      num:1,
      front_cover:""    
    }

    this.order={
      pay_time:"",
      order_id:"",
      goods_id:"",
      num:"",
      goods_class_id:"",
      price:"",
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

    this.comment= this.formbuilder.group({
      content:'',
    })

    this.showcomment={
      content:"",
      goods_id:"",
      grade:"",
    }

    this.stars=[
      {
        src:"../../assets/img/star.png",
      },
      {
        src:"../../assets/img/star.png",
      },
      {
        src:"../../assets/img/star.png",
      },
      {
        src:"../../assets/img/star.png",
      },
      {
        src:"../../assets/img/star.png",
      }
  ]

  this.grade={
    grade:'5'
  }


  }

  ngOnInit() {
    this.goods_id=this.fetchService.goods_id;
    console.log(this.goods_id);
    // this.star();
    this.getComments();
    this.showcomment.goods_id=this.goods_id;
    this.getUserInform();
    this.getGoods();
    this.getAddresses();
  }

  getGoods = () => this.fetchService.callRestAPI(this.fetchService.URL3).then(resp => {
    this.mygood = [...resp.list];
    this.mygood = this.mygood.filter(good=> {
      return good.goods_id===this.goods_id;
    });
    console.log(this.mygood);
    this.thisgood=this.mygood[0];
    this.thisgood.num=1;
    this.order.goods_name=this.thisgood.goods_name;
    this.order.goods_id=this.thisgood.goods_id;
    this.order.num=this.thisgood.num;
    this.order.goods_class_id=this.thisgood.goods_class_id;
    this.order.price=this.thisgood.price;
    this.order.username=this.userinf.username;
    this.order.phone=this.userinf.phone;
    
    
}).catch(error => {
  return Promise.reject(Error(error.message));
});

  addtoCart() {          //add操作不传id参数,delete和update都传
    this.fetchService.callRestAPI(this.fetchService.URL4, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.thisgood)
    }).then(resp => {
        console.log('addedgood -->', resp);
        alert("加入成功！");
        return resp;
    }).catch(error => {
        return Promise.reject(Error(error.message));
    });
  } 

getAddresses = () => this.fetchService.callRestAPI(this.fetchService.URL14).then(resp => {  //为什么只有一个URL option参数不加嘛？
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
    
    return resp;
}).catch(error => {
    return Promise.reject(Error(error.message));
});
}

postComment(){
  this.showcomment.content=this.comment.value.content;
  this.fetchService.callRestAPI(this.fetchService.URL21, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(this.showcomment)
  }).then(resp => {
    console.log('addedcomment -->', resp);
    this.allcomment=resp;
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
}

getComments () { 
  let goods_id=this.goods_id;
  this.fetchService.callRestAPI(this.fetchService.URL22+`/${goods_id}`).then(resp => {  //为什么只有一个URL option参数不加嘛？
  this.allcomment = [...resp];   // ?
  // this.showaddressesHTML();
  return resp;
}).catch(error => {
  return Promise.reject(Error(error.message));
});
}

// star(){
//   var aLi = document.getElementsByClassName("star");
//   var oSpan = document.getElementById("span");
//   var oP = document.getElementById("p");
//   var iScore = 0;
//   var iStar = 0

//   for (var i = 0; i < aLi.length; i++){
//     // aLi[i].index = i;
//     let index=i;
//     aLi[i].onclick =function(){
//       //  iStar = i;
//       oP.style.display = "none";
//       oSpan.innerHTML = `<strong>${index+1}分</strong>`
//       // + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
//   }
// }

// }

changecolor(index){
  for(let j=0;j<=4;j++){
    this.stars[j].src="../../assets/img/star.png";
  }
  for(let i=0;i<=index;i++){
    this.stars[i].src="../../assets/img/blackstar.png";
  }
  this.grade.grade=index+1;
  this.showcomment.grade=this.grade.grade;
  
  // for(var n=0;n<=4;n++)
  // document.getElementsByClassName('star-png')[n].setAttribute('src','../../assets/img/star.png');
  // for(var n=0;n<=i;n++)
  // document.getElementsByClassName('star-png')[n].setAttribute('src','../../assets/img/blackstar.png');
}

}
