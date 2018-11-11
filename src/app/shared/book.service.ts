import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Book } from './book.model';

@Injectable()
export class BookService {
    booksList : any;
  readonly rootUrl = 'http://test.incenplus.com:5000';
  constructor(private http: HttpClient) { }


  getBooks(){
    return this.http.get(this.rootUrl+'/books?token='+localStorage.getItem('userToken'));
  }

}
