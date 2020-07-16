import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  logout(): void {
    localStorage.removeItem('user');
    this.user = null;
  }
}
