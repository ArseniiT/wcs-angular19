import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';

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
}
