import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('/assets/json/users.json');
  }

  getUsersById(id: number): Observable<User>{
    return this.http.get<User[]>('/assets/json/users.json').pipe(
      map(users => {
        console.log(id)
        return users[id]})
    );
  }
}
