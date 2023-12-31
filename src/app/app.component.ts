import { Component } from '@angular/core';
import { User } from './user.model';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users!: User[];

  constructor(private service: HttpService){}

  ngOnInit(): void {
    this.service.getUsers().subscribe(u => {
      this.users = u
    });
  }
}
