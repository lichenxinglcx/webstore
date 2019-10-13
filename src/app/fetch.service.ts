import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  user=[];
  goods;
  carts;
  goods_id=1;

  constructor() { }

  usersList = [];
  URL = 'http://localhost:8080/user/addAddress';
  URL2='http://localhost:8080/register';
  URL3='http://localhost:8080/goods';
  URL4='http://localhost:8080/cart/addCart';
  URL9='http://localhost:8080/cart/getCart';
  URL5='http://localhost:3000/province';
  URL6='http://localhost:3000/city';
  URL7='http://localhost:3000/order';
  URL8='http://localhost:3000/orders';
  URL10='http://localhost:8080/cart/changeCart';
  URL11='http://localhost:8080/login';
  URL12='http://localhost:8080/user/getInfo';
  URL13='http://localhost:8080/user/changeInfo';
  URL14='http://localhost:8080/user/getAddress';
  URL15='http://localhost:8080/province';
  URL16='http://localhost:8080/city';
  URL17='http://localhost:8080/cart/deleteCart';
  URL18='http://localhost:8080/order/addOrder';
  URL19='http://localhost:8080/user/order';
  URL20='http://localhost:8080/user/deleteAddress';
  URL21='http://localhost:8080/comments';
  URL22='http://localhost:8080/getComments';
  URL23='http://localhost:8080/cart/clearCart';



  callRestAPI = async (url, opt = {}) => {
    return await fetch(url, opt).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(new Error('Dummy error from server'));
    });
  };

  // getGoods = () => this.callRestAPI(this.URL3).then(resp => {
  //   this.goods = [...resp];
  //   return resp;
  // }).catch(error => {
  //   return Promise.reject(Error(error.message));
  // });

  // getUsers = () => this.callRestAPI(this.URL2).then(resp => {
  //   this.usersList = [...resp];
  //   return resp;
  // }).catch(error => {
  //   return Promise.reject(Error(error.message));
  // });

  // getCarts= () => this.callRestAPI(this.URL4).then(resp => {
  //   this.carts = [...resp];
  //   return resp;
  // }).catch(error => {
  //   return Promise.reject(Error(error.message));
  // });

}
