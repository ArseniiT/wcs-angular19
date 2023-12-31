import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private service: HttpService){}

  ngOnInit(): void {
    this.service.getUsers().subscribe(x => console.log(x));
  }

}
