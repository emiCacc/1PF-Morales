import { Component, OnInit } from '@angular/core';
import { AsignaturesService } from 'src/app/shared/services/asignatures.service';
import { IAsignatures } from '../../models/asignatures_iface';
import { IStudents } from '../../../students/models/students_iface';
import { StudentsService } from 'src/app/shared/services/students.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})

export class QualificationsComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any[] = [];
  students: IStudents[] = [];
  asignatures: IAsignatures[] = [];

  constructor(private asignaturesService: AsignaturesService,
              private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.asignaturesService.asignatures$.subscribe(asignatures => {
      this.asignatures = asignatures;
      this.updateDisplayedColumns();
    });
    this.studentsService.students$.subscribe(students => {
      this.students = students;
      this.updateDataSource();
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
      const rowData: any = { id: student.id, studentName: student.firstName };
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
