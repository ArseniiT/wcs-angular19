import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-acc-show',
  templateUrl: './acc-show.component.html',
  styleUrl: './acc-show.component.css'
})
export class AccShowComponent implements OnInit{
  @Input() id!: number;
  @Input() user!: User;

  constructor(){}

  ngOnInit(): void {
  }

}
