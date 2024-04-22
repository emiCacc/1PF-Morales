import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsignaturesService } from 'src/app/shared/services/asignatures.service';
import { IAsignatures } from '../../models/asignatures_iface';
import { IRowData } from '../../models/rowData_iface';
import { IStudents } from '../../../students/models/students_iface';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Observable, Subscription, combineLatest, map, tap } from 'rxjs';
@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})

export class QualificationsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  students: IStudents[] = [];
  asignatures: IAsignatures[] = [];
  asignaturesSubscription!: Subscription;
  studentsSubscription!: Subscription;
  dataSource: IRowData[] = [];
  originalDataSource: IRowData[] = [];
  selectedButton: 'all' | 'approved' | 'failed' | null = 'all';
  public asignatures$: Observable<IAsignatures[]>;

  constructor(public asignaturesService: AsignaturesService,
              public studentsService: StudentsService) {
                this.asignatures$ = asignaturesService.asignatures$;
              }

  ngOnInit(): void {
    this.asignaturesSubscription = this.asignaturesService.asignatures$.subscribe(asignatures => {
      this.asignatures = asignatures;
      this.updateDisplayedColumns();
    });
  
    this.studentsSubscription = this.studentsService.students$.subscribe(students => {
      this.students = students;
      this.updateDataSource();
    });
  
    this.loadAsignatures();
  }

  ngOnDestroy(): void {
    this.asignaturesSubscription.unsubscribe();
    this.studentsSubscription.unsubscribe();
  }

  private loadAsignatures(): void {
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
    this.originalDataSource = [];
    this.students.forEach(student => {
      const rowData: IRowData = { id: student.id, studentName: student.firstName + ' ' + student.lastName };
      this.asignatures.forEach(asignature => {
        const grade = this.getGradeForStudentAndAsignature(student.id, asignature.id);
        rowData[asignature.asignature] = grade !== undefined ? grade : '-';
      });
      this.dataSource.push(rowData);
      this.originalDataSource.push(rowData);
    });
  }
  
  filterAll(): void {
    this.selectedButton = 'all';
    this.dataSource = [...this.originalDataSource];
  }

  filterApproved(): void {
    this.selectedButton = 'approved';
    combineLatest([this.asignaturesService.asignatures$, this.studentsService.students$])
      .pipe(
        tap(() => console.log('Filtrando aprobados')),
        map(([asignatures, students]) => {
          return students.map(student => {
            const rowData: IRowData = { id: student.id, studentName: `${student.firstName} ${student.lastName}` };
            asignatures.forEach(asignature => {
              const grade = this.getGradeForStudentAndAsignature(student.id, asignature.id);
              rowData[asignature.asignature] = grade !== undefined ? grade : '-';
            });
            return rowData;
          })
          .map(row => {
            const filteredRow: IRowData = { id: row.id, studentName: row.studentName };
            Object.keys(row).forEach((key: string) => {
              if (key !== 'id' && key !== 'studentName') {
                const value = row[key];
                if (typeof value === 'number' && value >= 6) {
                  filteredRow[key as keyof IRowData] = value;
                } else {
                  filteredRow[key as keyof IRowData] = 'Desaprobó';
                }
              } else {
                filteredRow[key as keyof IRowData] = row[key];
              }
            });
            return filteredRow;
          });
        })
      )
      .subscribe(filteredData => {
        this.dataSource = filteredData;
      });
  }
  
  filterFailed(): void {
    this.selectedButton = 'failed';
    combineLatest([this.asignaturesService.asignatures$, this.studentsService.students$])
      .pipe(
        tap(() => console.log('Filtrando desaprobados')),
        map(([asignatures, students]) => {
          return students.map(student => {
            const rowData: IRowData = { id: student.id, studentName: `${student.firstName} ${student.lastName}` };
            asignatures.forEach(asignature => {
              const grade = this.getGradeForStudentAndAsignature(student.id, asignature.id);
              rowData[asignature.asignature] = grade !== undefined ? grade : '-';
            });
            return rowData;
          })
          .map(row => {
            const filteredRow: IRowData = { id: row.id, studentName: row.studentName };
            Object.keys(row).forEach((key: string) => {
              if (key !== 'id' && key !== 'studentName') {
                const value = row[key];
                if (typeof value === 'number' && value <= 5) {
                  filteredRow[key as keyof IRowData] = value;
                } else {
                  filteredRow[key as keyof IRowData] = 'Aprobó';
                }
              } else {
                filteredRow[key as keyof IRowData] = row[key];
              }
            });
            return filteredRow;
          });
        })
      )
      .subscribe(filteredData => {
        this.dataSource = filteredData;
      });
  }
  
  showAll(): void {
    this.dataSource = [...this.originalDataSource];
  }  

  private getGradeForStudentAndAsignature(studentId: number, asignatureId: number): number | undefined {
    return Math.floor(Math.random() * 11); 
  }
}
