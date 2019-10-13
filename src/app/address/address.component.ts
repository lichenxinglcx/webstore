import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address;
  newaddress;
  province;
  city;
  district;
  showcity;
  showdistrict;

  constructor(
    private formBuilder: FormBuilder,
    private fetchService: FetchService,
  ) {

    this.address = this.formBuilder.group({
      user_id:1,
      province:'',
      city:'',
      district: '',
      detail:'',
      name:'',
      phone:''
    });


    this.province={
      province:''
    }

    this.city={
      city:''
    }

    this.district={
      district:''
    }
   }

  //  addAddress(){
  //   let htmlString = '';
  //   htmlString += `
  //   <p>
  //       ${JSON.stringify(this.newaddress[0].name)}
  //   </p>
	// 	`;
  //   let myaddress = document.getElementById("myaddress");
  //   myaddress.innerHTML = htmlString;
  //  }

   postAddress(){
     this.province
    this.fetchService.callRestAPI(this.fetchService.URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.address.value)
    }).then(resp => {
        console.log('addedAddress -->', resp);
        return resp;
    }).then( ()=>{
        console.log(this.newaddress);
    }).then(()=>this.fetchService.callRestAPI(this.fetchService.URL14)).then(resp => {
      // this.postAdress();
      this.newaddress = [...resp];
    
    // this.addAddress();
      return resp;
    }).catch(error => {
        return Promise.reject(Error(error.message));
    });
   }

    getAddress = () => this.fetchService.callRestAPI(this.fetchService.URL14).then(resp => {
      // this.postAdress();
      this.newaddress = [...resp];
      console.log(this.newaddress);
    // this.addAddress();
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });


  postProvince(){
      this.province.province=this.address.value.province;
      console.log(this.province);
      this.fetchService.callRestAPI(this.fetchService.URL15, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(this.province)
  }).then(resp => {
      console.log('addedprovince -->', resp);
      this.showcity=resp;
      return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });
  }

  postCity(){
    this.city.city=this.address.value.city;//注释
    console.log(this.city);
    this.fetchService.callRestAPI(this.fetchService.URL16, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(this.city)
  }).then(resp => {
    console.log('addedcity -->', resp);
    this.showdistrict=resp;
    return resp;
  }).catch(error => {
  return Promise.reject(Error(error.message));
  });
  } 

  deleteAddress(index){
    let id=this.newaddress[index].address_id;
    this.fetchService.callRestAPI(this.fetchService.URL20+ `/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      console.log('result from delete', resp);
      return resp;
    }).then(()=>{
      this.getAddress();
    }
    ).catch(error => {
      return Promise.reject(Error(error.message));
    });
  }


  ngOnInit() {
    
    this.getAddress();
  }

}
