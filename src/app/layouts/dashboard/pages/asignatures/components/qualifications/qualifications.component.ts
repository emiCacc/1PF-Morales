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
  displayedColumns: string[] = ['id', 'asignature', 'asignatureType', 'enrolled', 'professor'];
  asignatures: IAsignatures[] = [];
  students: IStudents[] = [];

  constructor(private asignaturesService: AsignaturesService,
              private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.asignaturesService.asignatures$.subscribe(asignatures => {
      this.asignatures = asignatures;
    });
    this.studentsService.students$.subscribe(students => {
      this.students = students;
    });
  }
}