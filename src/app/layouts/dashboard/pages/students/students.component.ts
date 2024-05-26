import { Component, OnInit } from '@angular/core';
import { IStudents } from './models/students_iface';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import Swal from 'sweetalert2';
import { StudentsService } from 'src/app/layouts/core/services/students.service';
import { AuthService, User } from 'src/app/layouts/core/services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'fullname', 'email', 'house', 'createdAt', 'actions'];

  students: IStudents[] = [];

  isAdmin: boolean = false;

  constructor(private matDialog: MatDialog,
              private studentsService: StudentsService,
              private authService: AuthService) {}

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
              //result.id = new Date().getTime().toString().substring(0, 2);
              this.studentsService.createStudent(result).subscribe({
                next: (createdStudent) => {
                  const newStudent: IStudents = {
                    id: createdStudent.id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    email: result.email,
                    house: result.house,
                    createdAt: new Date().toISOString(),
                  };
                  this.students = [...this.students, newStudent];
                },
              });
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
        this.studentsService.deleteStudent(id).subscribe(() => {
          this.students = this.students.filter((u) => u.id !== id);  
          Swal.fire({
            title: '¡Realizado!',
            text: 'Alumno eliminado con éxito.',
            icon: 'success'
          });
        });
      }
    });
  }
  

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe(
      (students: IStudents[]) => {
        this.students = students;
      },
      (error) => {
        console.error('Error al obtener los estudiantes:', error);
      }
    );
  
    this.sendUsersToQualifications();
    this.authService.actualUser$.subscribe((user: User | null) => {
      if (user) {
        this.isAdmin = user.role === 'admin';
      } else {
        this.isAdmin = false;
      }
    });
  }

  sendUsersToQualifications(): void {
    this.studentsService.setAsignatures(this.students);
  }

  convertToDate(dateString: string): Date {
    if (!dateString) {
      return new Date(); 
    }
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  }
  
  
  
  }
