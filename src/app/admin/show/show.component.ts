import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  @Input() id!: number;
  @Input() user!: User;

  constructor(){}

  ngOnInit(): void {
  }

}
