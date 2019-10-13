import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FetchService } from '../fetch.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin;

  constructor(
    private formBuilder: FormBuilder,
    public fetchService:FetchService,
    private router:Router,
  ) { 
    this.userlogin = this.formBuilder.group({
      email: '',
      password:''
    });
  }

  login(){
    this.fetchService.callRestAPI(this.fetchService.URL11, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(this.userlogin.value)
  }).then(resp => {
    console.log('addedUser -->', resp);
    if(resp===1){
      alert("账号密码错误！");
    }
    else {
      alert("登陆成功");
      this.router.navigate([{outlets:{primary:'mainpage',aux2:'hasloged',aux3:'logedcart'}}]);
    }
    return resp;
  }).catch(error => {
    return Promise.reject(Error(error.message));
  });}

  



  

  ngOnInit() {
  }

}
