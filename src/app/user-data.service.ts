import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  users :User[] =[];
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
