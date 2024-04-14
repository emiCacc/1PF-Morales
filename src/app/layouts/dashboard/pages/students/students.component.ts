import { Component } from '@angular/core';
import { IStudents } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

// VARIABLE USER ROLE SESSION AQUI

export class StudentsComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'house', 'createdAt', 'actions'];

  students: IStudents[] = [
      { id: 1, firstName: 'Harry', lastName: 'Potter', email: 'harry_potter@gmail.com', house:'Gryffindor', createdAt: new Date() },
      { id: 2, firstName: 'Hermione', lastName: 'Granger', email: 'hermione_granger@gmail.com', house:'Gryffindor', createdAt: new Date() },
      { id: 3, firstName: 'Ron', lastName: 'Weasley', email: 'ron_wasley@gmail.com', house:'Gryffindor', createdAt: new Date() },

      { id: 4, firstName: 'Draco', lastName: 'Malfoy', email: 'draco_malfoy@gmail.com', house:'Slytherin', createdAt: new Date() },
      { id: 5, firstName: 'Vincent', lastName: 'Crabbe', email: 'vincent_crabbe@gmail.com', house:'Slytherin', createdAt: new Date() },
      { id: 6, firstName: 'Gregory', lastName: 'Goyle', email: 'gregory_goyle@gmail.com', house:'Slytherin', createdAt: new Date() },

      { id: 7, firstName: 'Cedric', lastName: 'Diggory', email: 'cedric_diggory@gmail.com', house:'Hufflepuff', createdAt: new Date() },
      { id: 8, firstName: 'Hannah', lastName: 'Abbott', email: 'hannah_abbott@gmail.com', house:'Hufflepuff', createdAt: new Date() },
      { id: 9, firstName: 'Newt', lastName: 'Scammander', email: 'new_scammander@gmail.com', house:'Hufflepuff', createdAt: new Date() },

      { id: 10, firstName: 'Luna', lastName: 'Lovegood', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
      { id: 10, firstName: 'Cho', lastName: 'Chang', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
      { id: 10, firstName: 'Padma', lastName: 'Patil', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editingUser?: IStudents): void {
    this.matDialog
      .open(StudentsDialogComponent,{
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if(result){

            if(editingUser){
              this.students = this.students.map((u) => u.id === editingUser.id ? { ...u, ...result } : u);
            } else {
              result.id = new Date().getTime().toString().substring(0,2);
              result.createdAt = new Date();
              this.students = [...this.students, result];
            }
        }
      },
    });
  }
    
  onDeleteUser(id: number): void {
    if (confirm('Esta seguro?'))
    this.students = this.students.filter((u) => u.id != id);
  }

  onEditUser(id: number): void {

  }
  
  
  }
