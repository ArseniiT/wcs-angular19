import { Component } from '@angular/core';
import { User } from '../../user.model';
import { HttpService } from '../../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acc-smart',
  templateUrl: './acc-smart.component.html',
  styleUrl: './acc-smart.component.css'
})
export class AccSmartComponent {
  user!: User;
  id!: number;


  constructor(
    private service: HttpService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getUser();
    });
  }

  getUser() {
    if (this.id) {
      this.service.getUsersById(this.id).subscribe(u => {
        this.user = u
      });
    }
  }
}
