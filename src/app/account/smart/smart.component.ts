import { Component } from '@angular/core';
import { User } from '../../user.model';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.css'
})
export class SmartComponent {
  user!: User;
  id = 0;

  constructor(private service: HttpService){}

  ngOnInit(): void {
    this.service.getUsersById(this.id).subscribe(u => {
      console.log(u)
      this.user = u
    });
  }
}
