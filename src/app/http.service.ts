import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { Observable, map, find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{
  dataUrl = '/assets/json/users.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.dataUrl);
  }

  getUsersById(id: number): Observable<User>{
    return this.http.get<User[]>(this.dataUrl)
    .pipe(
      map(users => {
        return users.filter(u => {
          return u.id === id
        })[0]
      })
    );
  }
}
