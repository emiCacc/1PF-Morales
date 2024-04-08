import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

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

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if(result){
            //this.users.push(result); //NO funciona en Angular Material xq este necesita que le mande un ARRAY NUEVO, (no un usuario nuevo)
            this.users = [...this.users, result];
          }
          console.log(result)
        },
      });
    }
  }
