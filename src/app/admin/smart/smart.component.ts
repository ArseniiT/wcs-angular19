import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.css'
})
export class SmartComponent implements OnInit{
  users!: User[];

  constructor(private service: HttpService){}

  ngOnInit(): void {
    this.service.getUsers().subscribe(u => {
      console.log(u)
      this.users = u
    });
  }
}
