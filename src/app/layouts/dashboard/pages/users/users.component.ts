import { Component } from '@angular/core';
import { IUser } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt'];

  users: IUser[] = [
    { id: 1, firstName: 'Son', lastName: 'Goku', email: 'goku@gmail.com', createdAt: new Date(), },
    { id: 2, firstName: 'Vegeta', lastName: 'Vegeta', email: 'vegeta@gmail.com', createdAt: new Date(), },
    { id: 3, firstName: 'Son', lastName: 'Gohan', email: 'gohan@gmail.com', createdAt: new Date(), },
    { id: 4, firstName: 'Piccoro', lastName: 'Majunia', email: 'picoro@gmail.com', createdAt: new Date(), },
  ]
}
