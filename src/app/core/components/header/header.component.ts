import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/feature/user/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  user:User = {
    id: 1,
    firstName: 'Jose',
    lastName: 'Campos',
    email: 'josecamp@gmail.com',
    role: 'User'
  }
  loggeado = true;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
