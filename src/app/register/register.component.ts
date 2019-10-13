import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  user:FormGroup;

  constructor(
      private fetchService: FetchService,
      private formBuilder: FormBuilder,
      private router: Router,
  ) 
  {
    this.user = this.formBuilder.group({
      email:'',
      username:'',
      password:'',
      phone:'',
      year:'',
      month:'',
      day:''
    })

    // this.user = this.formBuilder.group({
    //   email:'',
    //   name:'',
    //   password:'',
    //   telephone:'',
    //   birthyear:'',
    //   birthmonth:'',
    //   birthday:''
    // });
     
  }

  // getStudents = () => this.fetchService.callRestAPI(this.fetchService.URL2).then(resp => {
  //   this.fetchService.usersList = [...resp];
  //   return resp;
  // }).catch(error => {
  //   return Promise.reject(Error(error.message));
  // });




  addUser() {          //add操作不传id参数,delete和update都传
    // this.fetchService.getUsers();
    this.fetchService.callRestAPI(this.fetchService.URL2, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.user.value)
    }).then(resp => {
        console.log('addedUser -->', resp);
        alert("注册成功！");
        this.router.navigate(['/mainpage']);
        return resp;
    }).then( ()=>{
        console.log(this.fetchService.usersList);
    }).catch(error => {
        return Promise.reject(Error(error.message));
    });
  } 

  ngOnInit() {
  }

}


