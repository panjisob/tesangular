import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { Book } from './book.model';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://test.incenplus.com:5000';
  constructor(private http: HttpClient) { }

  selectedBook : Book;

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password;
    var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth':'True' });
    
    return this.http.post(this.rootUrl + '/users/login', data, { headers: reqHeader });
  }

  getUserClaims(){  
   return  this.http.get(this.rootUrl+'/users/me?token='+localStorage.getItem('userToken'));
  }

  getBooks(){
    return this.http.get(this.rootUrl+'/books?token='+localStorage.getItem('userToken'));
  }
  postBook(book){
    var data = "name=" + book.name + "&description=" + book.description;
    var reqHeader = new HttpHeaders({'accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded'});
    
    return this.http.post(this.rootUrl + '/books/insert?token='+localStorage.getItem('userToken'), data, { headers: reqHeader });
  }

  detailBook(id){
    var data = "token="+localStorage.getItem('userToken') + "&id=" + id;
    console.log(this.rootUrl+'/books/detail?'+data);
    
    return this.http.get(this.rootUrl+'/books/detail?'+data);
  }

  putBook(book){
    var data = "id="+book.id+"&name="+book.name+"&description="+book.description;
    console.log(data);
    
    var reqHeader = new HttpHeaders({'accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.rootUrl + '/books/edit?token='+localStorage.getItem('userToken'), data, { headers: reqHeader });
  }

  deleteBook(id){
    var data = "id="+id;
    var reqHeader = new HttpHeaders({'accept': 'application/json','Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.delete(this.rootUrl + '/books/edit?token='+localStorage.getItem('userToken')+"&id="+id);
  }

  logout(){
    return this.http.get(this.rootUrl+'/users/logout?token='+localStorage.getItem('userToken'));
  }
}
