import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/Data.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url= 'https://reqres.in/api/users/2'

  constructor(private http: HttpClient) { }

  create(data: Data){
    return this.http.post(this.url, Data);
  }

  getAll(){
    return this.http.get(this.url);
  }

  getOne(id: number){
    return this.http.get(`${this.url} / ${id}}`);
  }

  update(data: Data){
    return this.http.put(`${this.url} / ${data.id}`, data);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

  login(){}

  loggout(){}

}
