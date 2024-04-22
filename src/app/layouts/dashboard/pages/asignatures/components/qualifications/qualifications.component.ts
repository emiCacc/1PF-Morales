import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsignaturesService } from 'src/app/shared/services/asignatures.service';
import { IAsignatures } from '../../models/asignatures_iface';
import { IStudents } from '../../../students/models/students_iface';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})

export class QualificationsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  dataSource: any[] = [];
  students: IStudents[] = [];
  asignatures: IAsignatures[] = [];
  asignaturesSubscription!: Subscription;
  studentsSubscription!: Subscription;

  constructor(private asignaturesService: AsignaturesService,
              private studentsService: StudentsService) {}

  ngOnInit(): void {
    // Suscribirse al servicio de asignaturas y estudiantes
    this.asignaturesSubscription = this.asignaturesService.asignatures$.subscribe(asignatures => {
      this.asignatures = asignatures;
      this.updateDisplayedColumns();
    });

    this.studentsSubscription = this.studentsService.students$.subscribe(students => {
      this.students = students;
      this.updateDataSource();
    });

    // Llamar a la función para cargar asignaturas
    this.loadAsignatures();
  }

  ngOnDestroy(): void {
    // Desuscribirse al destruir el componente para evitar posibles fugas de memoria
    this.asignaturesSubscription.unsubscribe();
    this.studentsSubscription.unsubscribe();
  }

  private loadAsignatures(): void {
    // Llamar al servicio para cargar las asignaturas y manejar la Promise
    this.asignaturesService.setAsignatures(this.asignatures)
      .then(() => {
        console.log('Asignaturas cargadas con éxito');
      })
      .catch(error => {
        console.error('Error al cargar asignaturas:', error);
      });
  }

  private updateDisplayedColumns(): void {
    this.displayedColumns = ['id', 'studentName'];
    this.asignatures.forEach(asignature => {
      this.displayedColumns.push(asignature.asignature);
    });
  }

  private updateDataSource(): void {
    this.dataSource = [];
    this.students.forEach(student => {
      const rowData: any = { id: student.id, studentName: student.firstName + ' ' + student.lastName };
      this.asignatures.forEach(asignature => {
        const grade = this.getGradeForStudentAndAsignature(student.id, asignature.id);
        rowData[asignature.asignature] = grade !== undefined ? grade : '-';
      });
      this.dataSource.push(rowData);
    });
  }

  private getGradeForStudentAndAsignature(studentId: number, asignatureId: number): number | undefined {
    return Math.floor(Math.random() * 11); 
  }
}
