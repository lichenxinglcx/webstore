import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-personinf',
  templateUrl: './personinf.component.html',
  styleUrls: ['./personinf.component.css']
})
export class PersoninfComponent implements OnInit {
  userinformation;
  showinformation;
  regemail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  regtel=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fetchService:FetchService,
  ) { 
    this.userinformation = this.formBuilder.group({
      user_id:1,
      sex:'',
      username:['',[Validators.required, Validators.maxLength(10)]],
      phone:['',[Validators.required, Validators.pattern(this.regtel)]],
      email: ['',[Validators.required,Validators.pattern(this.regemail)]],
      year:'',
      month:'',
      day:''
    });

    this.showinformation={
      sex:"",
      username:"",
      phone:"",
      email:"",
      year:"",
      month:"",
      day:""  
    };
  }

  // submit(){
  //   this.showinformation=this.userinformation;
  //   console.log(this.userinformation.name);
  // }

  updateUser() {
    let id = this.showinformation.user_id;
    this.fetchService.callRestAPI(this.fetchService.URL13, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.userinformation.value)
    }).then(resp => {
        console.log('result from update', resp);
        this.getUserInform();
        return resp;
    }).catch(error => {
        return Promise.reject(Error(error.message));
    });
  }

  getUserInform() {
    this.fetchService.callRestAPI(this.fetchService.URL12).then(resp => {
        this.showinformation = resp;
        console.log(this.showinformation);
        return resp;
    }).catch(error => {
        return Promise.reject(Error(error.message));
    })
    
  }

  ngOnInit() {
    this.getUserInform();
  }

  

}
