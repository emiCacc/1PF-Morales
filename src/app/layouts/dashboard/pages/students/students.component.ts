import { Component, OnInit } from '@angular/core';
import { IStudents } from './models/students_iface';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import Swal from 'sweetalert2';
import { StudentsService } from 'src/app/shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'fullname', 'email', 'house', 'createdAt', 'actions'];

  students: IStudents[] = [
      { id: 1, firstName: 'Harry', lastName: 'Potter', email: 'harry_potter@gmail.com', house:'Gryffindor', createdAt: new Date() },
      { id: 2, firstName: 'Hermione', lastName: 'Granger', email: 'hermione_granger@gmail.com', house:'Gryffindor', createdAt: new Date() },
      { id: 3, firstName: 'Ronald', lastName: 'Weasley', email: 'ron_wasley@gmail.com', house:'Gryffindor', createdAt: new Date() },

      { id: 4, firstName: 'Draco', lastName: 'Malfoy', email: 'draco_malfoy@gmail.com', house:'Slytherin', createdAt: new Date() },
      { id: 5, firstName: 'Vincent', lastName: 'Crabbe', email: 'vincent_crabbe@gmail.com', house:'Slytherin', createdAt: new Date() },
      { id: 6, firstName: 'Gregory', lastName: 'Goyle', email: 'gregory_goyle@gmail.com', house:'Slytherin', createdAt: new Date() },

      { id: 7, firstName: 'Cedric', lastName: 'Diggory', email: 'cedric_diggory@gmail.com', house:'Hufflepuff', createdAt: new Date() },
      { id: 8, firstName: 'Hannah', lastName: 'Abbott', email: 'hannah_abbott@gmail.com', house:'Hufflepuff', createdAt: new Date() },
      { id: 9, firstName: 'Artemisa', lastName: 'Lufkin', email: 'lartemisia@yahoo.com', house:'Hufflepuff', createdAt: new Date() },

      { id: 10, firstName: 'Luna', lastName: 'Lovegood', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
      { id: 10, firstName: 'Cho', lastName: 'Chang', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
      { id: 10, firstName: 'Padma', lastName: 'Patil', email: 'seamus_finnigan@gmail.com', house:'Ravenclaw', createdAt: new Date() },
  ];

  constructor(private matDialog: MatDialog,
              private studentsService: StudentsService) {}

  openDialog(editingUser?: IStudents): void {
    this.matDialog
      .open(StudentsDialogComponent,{
        data: editingUser,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result !== undefined) {
            if (editingUser) {
              let isChanged = false;
              for (const key in result) {
                if (result.hasOwnProperty(key) && (result as any)[key] !== (editingUser as any)[key]) {
                  isChanged = true;
                  break;
                }
              }
              if (isChanged) {
                this.students = this.students.map((u) => u.id === editingUser.id ? { ...u, ...result } : u);
                Swal.fire({
                  title: '¡Realizado!',
                  text: '¡Alumno actualizado con éxito!',
                  icon: 'success'
                });
              } else {
                Swal.fire({
                  title: 'No sucedió nada',
                  text: 'No se realizaron cambios...',
                  icon: 'info'
                });
              }
            } else {
              result.id = new Date().getTime().toString().substring(0, 2);
              result.createdAt = new Date();
              this.students = [...this.students, result];
              Swal.fire({
                title: '¡Realizado!',
                text: '¡Alumno agregado con éxito!',
                icon: 'success'
              });
            }
          } else {
            Swal.fire({
              title: 'No sucedió nada',
              text: 'No se realizaron cambios...',
              icon: 'info'
            });
          }
        },
      });
  }

  openBioStudent(selectedTeacher: IStudents){
    const { firstName, lastName } = selectedTeacher;
    const wikipediaUrl = `https://harrypotter.fandom.com/es/wiki/${firstName}_${lastName}`;
    window.open(wikipediaUrl, '_blank');
  }
      
  onDeleteStudent(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará a este usuario',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.students = this.students.filter((u) => u.id !== id);  
        Swal.fire({
          title: '¡Realizado!',
          text: 'Alumno eliminado con éxito.',
          icon: 'success'
        });
      }
    });
  }

  ngOnInit(): void {
    this.sendUsersToQualifications();
  }

  sendUsersToQualifications(): void {
    this.studentsService.setAsignatures(this.students);
    console.log(this.students);
  }
  
  
  }
